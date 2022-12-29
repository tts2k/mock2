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
    user.role.forEach(u => {
      u.permissionsOnRole.forEach(p => {
        // Make sure to not overwrite RW permission with RO if not duplicate
        if (p.mode === PermMode.RO) {
          perms.set(p.permission.name, (perms.get(p.permission.name) !== PermMode.RW) ? PermMode.RO : PermMode.RW)
        }
        else {
          perms.set(p.permission.name, p.mode);
        }
      })
    });

    return {
      userId: payload.sub,
      username: payload.username,
      perms
    }
  }
}
