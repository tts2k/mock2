import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class GetAllCategoriesQueryDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  q?: string
}
