import { Module } from '@nestjs/common';
import { ColorModule } from 'src/color/color.module';
import { CouponModule } from 'src/coupon/coupon.module';
import { PaginationModule } from 'src/pagination/pagination.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ReviewModule } from 'src/review/review.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    PrismaModule,
    PaginationModule,
    CouponModule,
    ReviewModule,
    ColorModule
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
