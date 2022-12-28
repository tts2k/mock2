import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDefined, IsNotEmptyObject, IsNumber, IsObject, IsOptional, ValidateNested } from "class-validator";
import { ColorsDto } from "./create-product.dto";
import { ProductDto } from "./product.dto";


export class UpdateColorDto extends PartialType(ColorsDto) {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  id: number
}

export class UpdateProductDto extends PartialType(ProductDto) {
  @ApiProperty({
    type: [ColorsDto]
  })
  @IsDefined()
  @IsArray()
  @IsObject({ each: true })
  @IsNotEmptyObject({}, { each: true })
  @ValidateNested({ each: true })
  @Type(() => UpdateColorDto)
  colors: UpdateColorDto[]
}
