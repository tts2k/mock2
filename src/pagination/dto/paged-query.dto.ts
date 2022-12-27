import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsDefined } from "class-validator";

export class PagedQueryDto {
  @ApiProperty({
    default: 1
  })
  @IsNumber()
  @IsDefined()
  page: number = 1
}
