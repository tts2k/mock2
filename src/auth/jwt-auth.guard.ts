import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate { 
  constructor(
    private reflector: Reflector,

    @Inject(AuthService) private readonly authService: AuthService) {
    super();
    }
}
