import { Module } from '@nestjs/common';
import { PaginationModule } from 'src/pagination/pagination.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ReviewService } from './review.service';

@Module({
  imports: [
    PrismaModule,
    PaginationModule
  ],
  providers: [ReviewService],
  exports: [ReviewService]
})
export class ReviewModule {}
