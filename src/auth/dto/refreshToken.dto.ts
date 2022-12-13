import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class RefreshTokenAuthDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  refreshToken: string
}
