import { Injectable } from '@nestjs/common';
import { Coupon } from '@prisma/client';
import { compareAsc } from 'date-fns';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CouponService {
  constructor(private readonly prisma: PrismaService) { }

  async findCoupon(code: string, productId: number): Promise<Coupon> {
    return this.prisma.coupon.findFirst({
      where: { productId, code }
    })
  }

  async validateCopuon(code: string, productId: number): Promise<boolean> {
    const coupon = await this.findCoupon(code, productId);
    if (!coupon) {
      return false;
    }

    return (compareAsc(new Date(), coupon.expires) >= 0);
  }
}
