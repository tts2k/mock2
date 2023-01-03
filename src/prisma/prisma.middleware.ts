import { Prisma } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import { exclude } from "src/common/common.utils";

export function HashPasswordMiddleware(): Prisma.Middleware {
  return async (params: Prisma.MiddlewareParams, next: (params: Prisma.MiddlewareParams) => Promise<any>) => {
    if (params.model === 'User' && (params.action === 'create' || params.action === 'update')) {
      const user = params.args.data;
      user.password = await bcrypt.hash(user.password, 8);
      params.args.data = user;
    }

    return await next(params);
  }
}

export function FilterAdminRight(): Prisma.Middleware {
  return async (params: Prisma.MiddlewareParams, next: (params: Prisma.MiddlewareParams) => Promise<any>) => {
    if (params.model === 'User' && (params.action === 'create' || params.action === 'update')) {
      params.args.data = exclude(params.args.data, ['isAdmin']);
    }

    return await next(params);
  }
}
