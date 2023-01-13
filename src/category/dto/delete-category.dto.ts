import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber } from "class-validator";

export class DeleteCategoryDto {
  @IsNumber()
  @IsDefined()
  @ApiProperty()
  id: number
}
