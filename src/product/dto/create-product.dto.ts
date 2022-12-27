import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import {
  IsArray,
  IsDefined,
  IsHexColor,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString, ValidateNested
} from "class-validator"
import { ProductDto } from "./product.dto"

export class ColorsDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string
}

export class CreateProductDto extends ProductDto {
  @ApiProperty({
    type: [ColorsDto]
  })
  @IsDefined()
  @IsArray()
  @IsObject({ each: true })
  @IsNotEmptyObject({}, { each: true })
  @ValidateNested({ each: true })
  @Type(() => ColorsDto)
  colors: ColorsDto[]
}
