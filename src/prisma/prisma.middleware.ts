import { Prisma } from "prisma/generated/prisma-client.js";
import * as bcrypt from 'bcrypt';

export function HashPasswordMiddleware(): Prisma.Middleware {
  return async (params: Prisma.MiddlewareParams, next: (params: Prisma.MiddlewareParams) => Promise<any>) => {
    if (params.model == 'User' && params.action == 'create') {
      const user = params.args.data;
      user.password = await bcrypt.hash(user.password, 8);
      params.args.data = user;
    }

    return await next(params);
  }
}