import { Prisma } from "@prisma/client";

export const findUniqueForAuthParams = Prisma.validator<Prisma.UserArgs>()({
  select: {
    id: true,
    username: true,
    isAdmin: true,
    role: {
      select: {
        name: true,
        permissionsOnRole: {
          select: {
            mode: true,
            permission: {
              select: {
                name: true
              }
            }
          }
        }
      }
    }
  }
});
