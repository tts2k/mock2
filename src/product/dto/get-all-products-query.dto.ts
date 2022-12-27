import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator'
import { PagedQueryDto } from 'src/pagination/dto/paged-query.dto';

export class GetAllProductsQueryDto extends PagedQueryDto {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  categoryId?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  q?: string;
}

