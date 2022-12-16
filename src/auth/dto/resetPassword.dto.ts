import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class ResetPasswordAuthDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  newPassword: string
}
