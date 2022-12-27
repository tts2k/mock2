import { IsDefined, IsNumber } from "class-validator";

export class GetProductParamDto {
  @IsNumber()
  @IsDefined()
  id: number
}
