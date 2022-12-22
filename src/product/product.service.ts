import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PaginatedList } from 'src/pagination/pagination.interface';
import { PaginationService } from 'src/pagination/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { productListItemParams } from './product.helpers';
import { ProductListItem } from './product.interface';

@Injectable()
export class ProductService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly paginationService: PaginationService
  ) { }

  async update(
    where: Prisma.ProductWhereUniqueInput,
    data: Prisma.ProductUpdateInput,
    tx?: Prisma.TransactionClient
  ): Promise<Product> {
    return tx.product.update({ where, data });
  }

  async create(data: Prisma.ProductCreateInput, tx?: Prisma.TransactionClient): Promise<Product> {
    return tx.product.create({ data });
  }

  async getAllProducts(page: number, categoryId?: number): Promise<PaginatedList<ProductListItem>> {
    const [items, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        ...productListItemParams([categoryId]),
        ...this.paginationService.getPaginationParams(page),
      }),
      this.prisma.product.count()
    ])

    return { items, total, page }
  }

  async getRelatedProducts(productId: number, limit: number): Promise<ProductListItem[]> {
    return await this.prisma.$transaction(async (tx) => {
      const productCategories = await tx.product.findUnique({
        where: { id: productId },
        select: { 
          categories: {
            select: {
              categoryId: true
            }
          }
        }
      });

      const categoryIds = productCategories.categories.map(e => e.categoryId);

      return tx.product.findMany({
        ...productListItemParams(categoryIds),
        take: limit,
      })
    })
  }

  async getProductsByName(keyword: string, page: number, categoryId?: number): Promise<PaginatedList<ProductListItem>> {
    const [items, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        ...productListItemParams([categoryId]),
        ...this.paginationService.getPaginationParams(page),
        where: {
          name: {
            contains: keyword
          },
        }
      }),
      this.prisma.product.count()
    ])

    return { items, total, page }
  }

  async getProductById(id: number): Promise<Product> {
    return await this.prisma.product.findUnique({ where: { id } });
  }
}
