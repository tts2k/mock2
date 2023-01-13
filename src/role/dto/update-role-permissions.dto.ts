import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNotEmptyObject, IsObject, ValidateNested } from "class-validator";
import { RolePermDto } from "./create-role.dto";

export class UpdateRolePermissionsDto {
  @ApiProperty({
    type: [RolePermDto]
  })
  @IsArray()
  @IsObject({ each: true })
  @IsNotEmptyObject({}, { each: true })
  @ValidateNested({ each: true })
  @Type(() => RolePermDto)
  perms: RolePermDto[]
}
