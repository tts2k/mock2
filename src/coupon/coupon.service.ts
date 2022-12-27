import { Injectable } from '@nestjs/common';
import { Coupon } from '@prisma/client';
import { addDays, compareAsc } from 'date-fns';
import { PrismaService } from 'src/prisma/prisma.service';
import { CouponRO } from './coupon.interface';

@Injectable()
export class CouponService {
  constructor(private readonly prisma: PrismaService) { }

  async findCoupon(code: string, productId: number): Promise<Coupon> {
    return this.prisma.coupon.findFirst({
      where: { productId, code }
    })
  }

  async validateCoupon(code: string, productId: number): Promise<CouponRO> {
    const coupon = await this.findCoupon(code, productId);
    if (!coupon) {
      return {
        isValidate: false,
        message: "Invalid coupon"
      }
    }

    const isValidate = compareAsc(new Date(), coupon.expires) >= 0;

    return isValidate
      ? { isValidate, message: "Coupon is valid" }
      : { isValidate, message: "Coupon expired" }
  }

  async createCoupon(code: string, productId: number, expireInDays: number): Promise<Coupon> {
    const expireDate = addDays(new Date(), expireInDays);
    return await this.prisma.coupon.create({ data: {
      code,
      productId,
      expires: expireDate
    }})
  }
}
