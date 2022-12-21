import { IsNotEmpty, IsNumber } from 'class-validator'

export class GetProductParamDto {
  @IsNumber()
  @IsNotEmpty()
  id: number
}

