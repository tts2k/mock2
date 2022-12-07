import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'prisma/generated/prisma-client.js';
import moment from 'moment';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private userService: UserService
  ) {}

  async generateTokens(user: User) {

  }
}
