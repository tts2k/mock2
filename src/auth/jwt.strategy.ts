import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtPayload, JwtUser } from "./auth.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET')
    })
  }

  async validate(payload: JwtPayload): Promise<JwtUser> {
    return {
      userId: payload.sub,
      username: payload.username
    }
  }
}
