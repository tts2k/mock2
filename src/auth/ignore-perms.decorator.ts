import { SetMetadata } from "@nestjs/common";

export const IgnorePerms = () => SetMetadata('ignorePerms', true)
