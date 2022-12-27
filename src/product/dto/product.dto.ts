import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsDefined, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class ProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sku: string

  @ApiProperty()
  @IsNumber()
  price?: number

  @ApiProperty()
  @IsNumber()
  qty?: number

  @ApiProperty()
  @IsNumber()
  brandId?: number

  @ApiProperty()
  @IsString()
  description?: string

  @ApiProperty({
    type: [Number]
  })
  @IsDefined()
  @IsArray()
  @IsNumber({}, { each: true })
  categoryIds: number[]
}
