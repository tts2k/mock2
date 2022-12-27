import { Injectable } from '@nestjs/common';
import { Prisma, Review } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) { }

  async getReviewsByProductId(productId: number): Promise<Review[]> {
    return this.prisma.review.findMany({
      where: {
        productId
      }
    })
  }

  async createReview(data: Prisma.ReviewCreateInput): Promise<Review> {
    return this.prisma.review.create({ data });
  }
}
