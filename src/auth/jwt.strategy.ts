import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtPayload, JwtUser, JwtUserPerm } from "./auth.interface";
import { UserAuth } from "src/user/user.interface";
import { UserService } from "src/user/user.service";
import { PermMode } from "@prisma/client";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    readonly configService: ConfigService,
    readonly userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET')
    })
  }

  async validate(payload: JwtPayload): Promise<JwtUser> {
    const user: UserAuth = await this.userService.getUserForAuth(payload.sub);
    const perms: JwtUserPerm = new JwtUserPerm();

    // Get user permissions
    for (const u of user.role) {
      if (user.isAdmin) {
        break;
      }

      for (const p of u.permissionsOnRole) {
        // Make sure to not overwrite RW permission with RO if duplicate
        if (perms.get(p.permission.name) === PermMode.RW) {
          continue;
        }

        perms.set(p.permission.name, p.mode);
      }
    }

    return {
      userId: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
      perms
    }
  }
}
