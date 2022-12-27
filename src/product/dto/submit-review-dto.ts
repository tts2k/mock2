import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString, Min, Max } from "class-validator"

export class SubmitReviewDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  productId: string

  @ApiProperty({
    description: "Product rating. A float number with minimum of 1 and maximum of 5",
    example: 2.5
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  rating: number
}
