import { SetMetadata } from "@nestjs/common";

export const IGNORE_AUTH_METADATA = 'ignoreAuth';
export const IGNORE_PERMS_METADATA = 'ignorePerms';
export const PERMS_METADATA = 'perms';
export const UseAuth = (...perms: string[]) => SetMetadata(PERMS_METADATA, perms);
export const IgnoreAuth = () => SetMetadata(IGNORE_AUTH_METADATA, true);
export const IgnorePerms = () => SetMetadata(IGNORE_PERMS_METADATA, true);
