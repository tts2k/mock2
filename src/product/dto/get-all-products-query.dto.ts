import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class GetAllProductsQueryDto {
  @IsNumber()
  categoryId: number

  @IsNumber()
  @IsNotEmpty()
  page: number = 1

  @IsString()
  q: string;
}

