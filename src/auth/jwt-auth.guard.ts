import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate { 
  constructor(
    private reflector: Reflector,
    @Inject(AuthService) private readonly authService: AuthService
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const parentCanActivate = await super.canActivate(context) as boolean;

    if (!parentCanActivate) {
      return parentCanActivate;
    }

    const adminRoute = this.reflector.getAllAndOverride<boolean>('Admin', [context.getHandler(), context.getClass()]);

    if (!adminRoute) {
      return parentCanActivate;
    }

    const request = context.switchToHttp().getRequest();
    const userId: number = request.user.id;
    
    const isAdmin = await this.authService.verifyAdmin(userId);
    if (isAdmin) {
      return parentCanActivate;
    }

    return false;
  }
}
