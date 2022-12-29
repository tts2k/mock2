import { SetMetadata } from "@nestjs/common";

export const UsePerms = (...perms: string[]) => SetMetadata('perms', perms)
