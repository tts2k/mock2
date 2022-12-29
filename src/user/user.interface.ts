import { Prisma } from "@prisma/client";
import { findUniqueForAuthParams } from "./user.helpers";

export type UserAuth = Prisma.UserGetPayload<typeof findUniqueForAuthParams>;
