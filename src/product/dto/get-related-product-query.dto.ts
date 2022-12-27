import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, Max } from 'class-validator'

export class  GetRelatedProductQueryDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Max(20)
  limit: number = 10
}
