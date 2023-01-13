import { Type } from "class-transformer";
import { IsDefined, IsInt } from "class-validator";

export class RoleIdDto {
  @IsInt()
  @IsDefined()
  @Type(() => Number)
  id: number
}
