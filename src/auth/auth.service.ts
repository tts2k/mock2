import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'prisma/generated/prisma-client.js';
import { JwtPayload, TokenType, AuthData } from './auth.interface';
import moment from 'moment';
import { JwtConfig } from './auth.interface';

@Injectable()
export class AuthService {
  private jwtConfig: JwtConfig;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.jwtConfig = {
      secret: this.configService.get<string>('JWT_SECRET'),
      accessExpirationMinutes: this.configService.get<number>('JWT_ACCESS_EXPIRE_MINUTES'),
      refreshExpirationDays:  this.configService.get<number>('JWT_REFRESH_EXPIRE_DAYS')
    }
  }

  private async generateToken(payload: JwtPayload) {
    return this.jwtService.sign(payload, { secret: this.jwtConfig.secret })
  }

  async generateAuthTokens(user: User): Promise<AuthData | null> {
    const accessTokenExpires: number = moment().add(this.jwtConfig.accessExpirationMinutes).unix();
    const refreshTokenExpires: number = moment().add(this.jwtConfig.refreshExpirationDays).unix();

    const accessPayload: JwtPayload = {
      sub: user.id,
      iat: moment().unix(),
      exp: accessTokenExpires,
      type: TokenType.ACCESS
    }
    const refreshPayload: JwtPayload = {
      sub: user.id,
      iat: moment().unix(),
      exp: refreshTokenExpires,
      type: TokenType.REFRESH
    }

    const accessToken: string = await this.generateToken(accessPayload);
    const refreshToken: string = await  this.generateToken(refreshPayload);

    return {
      username: user.username,
      email: user.email,
      token: {
        access: accessToken,
        refresh: refreshToken
      }
    }
  }
}
