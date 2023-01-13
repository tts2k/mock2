import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber } from "class-validator";
import { CategoryDto } from "./category.dto";

export class UpdateCategoryDto extends CategoryDto {
  @IsNumber()
  @IsDefined()
  @ApiProperty()
  id: number
}
