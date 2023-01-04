import { SetMetadata } from "@nestjs/common";

export const UseAuth = (...perms: string[]) => SetMetadata('perms', perms)
