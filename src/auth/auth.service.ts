import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'prisma/generated/prisma-client.js';
import { JwtPayload, TokenType, AuthData } from './auth.interface';
import moment, { Moment } from 'moment';
import { JwtConfig } from './auth.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  private jwtConfig: JwtConfig;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {
    this.jwtConfig = {
      accessExpirationMinutes: this.configService.get<number>('JWT_ACCESS_EXPIRE_MINUTES'),
      refreshExpirationDays: this.configService.get<number>('JWT_REFRESH_EXPIRE_DAYS')
    }
  }

  async generateAuthTokens(user: User): Promise<AuthData | null> {
    const accessTokenExpires: Moment = moment().add(this.jwtConfig.accessExpirationMinutes);
    const refreshTokenExpires: Moment = moment().add(this.jwtConfig.refreshExpirationDays);

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

  async validateUser(email: string, pass: string) {
    const user: User = await this.userService.findOne({ email });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
