import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ValidateCouponQueryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: "Coupon code must not be empty" })
  code: string
}
