import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator'
import { PagedQueryDto } from 'src/pagination/dto/paged-query.dto';

export class GetAllProductsQueryDto extends PagedQueryDto {
  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  categoryId?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  q?: string;
}

