import { IsNotEmpty, IsString } from 'class-validator'

export class ValidateCouponQueryDto {
  @IsString()
  @IsNotEmpty({ message: "Coupon code must not be empty" })
  code: string
}
