import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCouponDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string

  @ApiProperty()
  @IsNumber()
  @IsDefined()
  expiresInDays: number
}
