import { Module } from '@nestjs/common';
import { CouponModule } from 'src/coupon/coupon.module';
import { PaginationModule } from 'src/pagination/pagination.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    PrismaModule,
    PaginationModule,
    CouponModule
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
