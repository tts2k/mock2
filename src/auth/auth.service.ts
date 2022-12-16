import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import { JwtPayload, TokenType, AuthData, AuthRO } from './auth.interface';
import { JwtConfig } from './auth.interface';
import { SessionService } from 'src/session/session.service';
import { UserService } from 'src/user/user.service';
import { addMinutes, addDays, addHours, getUnixTime } from 'date-fns';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  private jwtConfig: JwtConfig;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly sessionService: SessionService,
    private readonly userService: UserService,
    private readonly mailService: MailService
  ) {
    this.jwtConfig = {
      accessExpirationMinutes: this.configService.get<number>('JWT_ACCESS_EXPIRE_MINUTES'),
      refreshExpirationDays: this.configService.get<number>('JWT_REFRESH_EXPIRE_DAYS'),
      emailVerificationSecret: this.configService.get<string>('JWT_VERIFICATION_SECRET'),
      emailVerificationExpirationHours: this.configService.get<number>('JWT_VERIFICATION_EXPIRE_HOURS'),
      resetPasswordExpirationHours: this.configService.get<number>('JWT_RESET_PASSWORD_EXPIRE_HOURS'),
      resetPasswordSecret: this.configService.get<string>('JWT_RESET_PASSWORD_SECRET')
    }
  }

  private generateAuthTokens(user: User): AuthData {
    const accessTokenExpires: Date = addMinutes(new Date(), this.jwtConfig.accessExpirationMinutes);
    const refreshTokenExpires: Date = addDays(new Date(), this.jwtConfig.refreshExpirationDays);

    const accessPayload: JwtPayload = {
      sub: user.id,
      iat: getUnixTime(new Date()),
      exp: getUnixTime(accessTokenExpires),
      type: TokenType.ACCESS,
      username: user.username
    }
    const refreshPayload: JwtPayload = {
      sub: user.id,
      iat: getUnixTime(new Date()),
      exp: getUnixTime(refreshTokenExpires),
      type: TokenType.REFRESH,
      username: user.username
    }

    const accessToken: string = this.jwtService.sign(accessPayload)
    const refreshToken: string = this.jwtService.sign(refreshPayload);

    return {
      data: {
        username: user.username,
        email: user.email,
        token: {
          access: accessToken,
          refresh: refreshToken
        }
      },
      expires: {
        access: accessTokenExpires,
        refresh: refreshTokenExpires
      }
    }
  }

  private generateVerifyToken(user: User, type: TokenType): string {
    const expireTime: number = getUnixTime(addHours(new Date(), this.jwtConfig.emailVerificationExpirationHours));

    const payload: JwtPayload = {
      sub: user.id,
      iat: getUnixTime(new Date()),
      exp: expireTime,
      username: user.username,
      type
    }

    return this.jwtService.sign(payload, { 
      secret: type === TokenType.VERIFY_EMAIL 
        ? this.jwtConfig.emailVerificationSecret
        : this.jwtConfig.resetPasswordSecret
    });
  }

  private verifyToken(token: string, secret?: string): JwtPayload {
    const payload = this.jwtService.verify(token, { secret });
    if (!payload.sub) {
      throw new NotFoundException('Could not find the user associated with this token.');
    }

    return payload;
  }

  async loginWithEmailAndPassword(email: string, password: string, userAgent: string): Promise<AuthRO> {
    const user = await this.userService.findAndCheckVerified(email, password);

    return await this.createSession(user, userAgent);
  }

  async registerAndSendComfirmEmail(data: Prisma.UserCreateInput) {
    await this.prismaService.$transaction(async (tx) => {
      const user = await this.userService.create(data, tx);

      const verifyToken = this.generateVerifyToken(user, TokenType.VERIFY_EMAIL);
      await this.mailService.sendUserConfirmation(user, verifyToken);
    })
  }

  async resendEmail(email: string) {
    const user = await this.userService.findOne({ email });
    if (!user) {
      throw new NotFoundException('Email not found');
    }

    const verifyToken = this.generateVerifyToken(user, TokenType.VERIFY_EMAIL);
    await this.mailService.sendResetPassword(user, verifyToken);
  }

  async createSession(user: User, userAgent: string): Promise<AuthRO> {
    const authData: AuthData = this.generateAuthTokens(user);
    await this.sessionService.create({
      refreshToken: authData.data.token.refresh,
      expires: authData.expires.refresh,
      deviceId: userAgent
    })

    return authData.data;
  }

  async requestResetPasswordEmail(email: string) {
    const user = await this.userService.findOne({ email });
    if (!user) {
      throw new NotFoundException('Email not found');
    }

    const token = this.generateVerifyToken(user, TokenType.RESET_PASSWORD);
    await this.mailService.sendResetPassword(user, token);
  }

  async resetPassword(token: string, newPassword: string) {
    this.prismaService.$transaction(async (tx) => {
      const payload: JwtPayload = this.verifyToken(token, this.jwtConfig.resetPasswordSecret);

      this.userService.update({
        where: { id: payload.sub },
        data: { password: newPassword }
      }, tx)
    })
  }

  async verifyRefreshToken(refreshToken: string): Promise<User> {
    const payload: JwtPayload = this.verifyToken(refreshToken);

    const user: User = await this.userService.findOne({ id: payload.sub })
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const session = this.sessionService.findOne({ refreshToken });
    if (!session) {
      throw new NotFoundException('Sesssion not found.')
    }

    return user;
  }

  async verifyEmailToken(token: string) {
    const payload: JwtPayload = this.verifyToken(token, this.jwtConfig.emailVerificationSecret);

    await this.userService.updateUserEmailVerification(payload.sub);
  }
}
