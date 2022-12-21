import { IsNotEmpty, IsNumber, Max } from 'class-validator'

export class  GetRelatedProductQueryDto {
  @IsNumber()
  @IsNotEmpty()
  @Max(20)
  limit: number = 10
}
