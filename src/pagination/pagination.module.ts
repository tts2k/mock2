import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaginationService } from './pagination.service';

@Module({
  imports: [ConfigModule],
  providers: [PaginationService]
})
export class PaginationModule {}
