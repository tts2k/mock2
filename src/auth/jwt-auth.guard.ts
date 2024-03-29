import { 
  CanActivate,
  ExecutionContext,
  Injectable,
  MethodNotAllowedException,
  UnauthorizedException 
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { PermMode } from "@prisma/client";
import { IGNORE_AUTH_METADATA, IGNORE_PERMS_METADATA, PERMS_METADATA } from "./auth.decorators";
import { ReqWithUser } from "./auth.interface";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate { 
  constructor(private reflector: Reflector) { 
    super()
  }

  handleRequest<TUser = any>(err: any, user: any, _: any, context: ExecutionContext): TUser {
    const ignoreAuth = this.reflector.get<boolean>(IGNORE_AUTH_METADATA, context.getHandler());
    if (ignoreAuth) {
      return user;
    }

    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    // Check if route is allowed to bypass perm check
    const ignorePerms = this.reflector.get<boolean>(IGNORE_PERMS_METADATA, context.getHandler());
    if (ignorePerms) {
      return user;
    }

    // Check user admin right
    if (user.isAdmin) {
      return user;
    }

    let userMode: PermMode = null; // Default user mode as RO
    // Get perms that route required, return if none was found
    const routePermModes: string[] = this.reflector.get<string[]>(PERMS_METADATA, context.getClass());
    if (!routePermModes) {
      return user;
    }

    // Loop through all perms assigned to this controller
    for (const rpm of routePermModes) {
      // Get user mode on this perm
      const urpm: PermMode = user.perms.get(rpm);

      // Skip if user doesn't have the perm
      if (!urpm) {
        continue;
      }

      userMode = urpm
      
      // If RW, end the loop because there can't be a higher authority
      if (userMode === PermMode.RW) {
        break;
      }
    }

    // If user mode is still null or undefined then user is not authorized to access this route
    if (!userMode) {
      throw new UnauthorizedException();
    }

    // Get HTTP method
    const method = context.switchToHttp().getRequest<ReqWithUser>().method;

    // Set route mode based on HTTP method
    let routeMode: PermMode = null;
    switch(method) {
      case 'PUT':
      case 'POST':
      case 'PATCH':
      case 'DELETE':
        routeMode = PermMode.RW;
        break;
      case 'GET':
        routeMode = PermMode.RO;
        break;
      default:
        throw new MethodNotAllowedException();
    }

    // If route is RW and user is RO then user is unauthorized
    if (routeMode === PermMode.RW && userMode === PermMode.RO) {
      throw new UnauthorizedException();
    }
    
    return user;
  }
}
