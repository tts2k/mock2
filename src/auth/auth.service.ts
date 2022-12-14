import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'prisma/generated/prisma-client.js';
import { JwtPayload, TokenType, AuthData, AuthRO } from './auth.interface';
import * as moment from 'moment';
import { JwtConfig } from './auth.interface';
import { SessionService } from 'src/session/session.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  private jwtConfig: JwtConfig;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly sessionService: SessionService,
    private readonly userService: UserService
  ) {
    this.jwtConfig = {
      accessExpirationMinutes: this.configService.get<number>('JWT_ACCESS_EXPIRE_MINUTES'),
      refreshExpirationDays: this.configService.get<number>('JWT_REFRESH_EXPIRE_DAYS'),
      emailVerificationSecret: this.configService.get<string>('JWT_VERIFICATION_SECRET'),
      emailVerificationExpirationHours: this.configService.get<number>('JWT_VERIFICATION_EXPIRE_HOURS')
    }
  }

  private async generateAuthTokens(user: User): Promise<AuthData | null> {
    const accessTokenExpires: moment.Moment = moment().add(this.jwtConfig.accessExpirationMinutes, 'minutes');
    const refreshTokenExpires: moment.Moment = moment().add(this.jwtConfig.refreshExpirationDays, 'days');

    const accessPayload: JwtPayload = {
      sub: user.id,
      iat: moment().unix(),
      exp: accessTokenExpires.unix(),
      type: TokenType.ACCESS,
      username: user.username
    }
    const refreshPayload: JwtPayload = {
      sub: user.id,
      iat: moment().unix(),
      exp: refreshTokenExpires.unix(),
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

  generateVerifyEmailToken(user: User): string {
    const expireTime: number = moment().add(this.jwtConfig.emailVerificationExpirationHours, 'hours').unix();

    const payload: JwtPayload = {
      sub: user.id,
      iat: moment().unix(),
      exp: expireTime,
      username: user.username,
      type: TokenType.VERIFY_EMAIL
    }

    return this.jwtService.sign(payload, { secret: this.jwtConfig.emailVerificationSecret });
  }

  async createSession(user: User, userAgent: string): Promise<AuthRO> {
    const authData: AuthData = await this.generateAuthTokens(user);
    await this.sessionService.create({
      refreshToken: authData.data.token.refresh,
      expires: authData.expires.refresh.toDate(),
      deviceId: userAgent
    })

    return authData.data;
  }

  async verifyRefreshToken(refreshToken: string): Promise<User> {
    const payload: JwtPayload = await this.jwtService.verifyAsync(refreshToken);
    const userId = payload.sub;
    if (!userId) {
      throw new NotFoundException('User id not found.')
    }

    const user: User = await this.userService.findOne({ id: userId })
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
    const payload = this.jwtService.verify(token, { secret: this.jwtConfig.emailVerificationSecret });
    if (!payload.sub) {
      throw new NotFoundException('Could not find the user associated with this token.');
    }

    await this.userService.verifyEmail(payload.sub);
  }
}
