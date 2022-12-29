import { Prisma } from "@prisma/client";

export const findUniqueForAuthParams = Prisma.validator<Prisma.UserArgs>()({
    select: {
      id: true,
      username: true,
      role: {
        select: {
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
})
