import { ApiProperty } from "@nestjs/swagger"
import { PermMode } from "@prisma/client"
import { Type } from "class-transformer"
import { IsArray, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsString, ValidateNested } from "class-validator"

export class RolePermDto {
  @ApiProperty()
  @IsNumber()
  id: number

  @ApiProperty()
  @IsNumber()
  mode: PermMode
}

export class CreateRoleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

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
