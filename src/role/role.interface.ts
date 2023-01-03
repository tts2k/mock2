import { PermMode } from "@prisma/client";

export interface RolePerm {
  id: number,
  mode: PermMode
}
