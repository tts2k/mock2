import { Type } from "class-transformer";
import { IsDefined, IsNumber } from "class-validator";

export class GetProductParamDto {
  @IsNumber()
  @IsDefined()
  @Type(() => Number)
  id: number
}
