import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CouponService } from './coupon.service';

@Module({
  imports: [PrismaModule],
  providers: [CouponService]
})
export class CouponModule {}
