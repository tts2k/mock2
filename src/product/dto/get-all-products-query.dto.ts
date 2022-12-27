import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator'
import { PagedQueryDto } from 'src/pagination/dto/paged-query.dto';

export class GetAllProductsQueryDto extends PagedQueryDto {
  @ApiProperty({ required: false })
  @IsNumber()
  categoryId?: number;

  @ApiProperty({ required: false })
  @IsString()
  q?: string;
}

