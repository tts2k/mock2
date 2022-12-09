import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LogoutAuthDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  refeshToken: string
}
