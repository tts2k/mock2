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

  async findOne(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
    return this.prisma.product.findUnique({ where });
  }

  async update(
    where: Prisma.ProductWhereUniqueInput,
    data: Prisma.ProductUpdateInput,
    tx?: Prisma.TransactionClient
  ): Promise<Product> {
    if (tx) {
      return tx.product.update({ where, data });
    }
    return this.prisma.product.update({ where, data })
  }

  async create(data: Prisma.ProductCreateInput, tx?: Prisma.TransactionClient): Promise<Product> {
    if (tx) {
      return tx.product.create({ data });
    }
    return this.prisma.product.create(({ data }));
  }

  async getAllProducts(page: number, categoryId?: number): Promise<PaginatedList<ProductListItem>> {
    const [items, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        ...productListItemParams(categoryId),
        ...this.paginationService.getPaginationParams(page),
      }),
      this.prisma.product.count()
    ])

    return { items, total, page } 
  }

  async getAllProductsWithLimit(limit: number, categoryId?: number): Promise<ProductListItem[]> {
    return this.prisma.product.findMany({
      ...productListItemParams(categoryId),
      take: limit
    })
  }

  async getProductsByName(page: number, keyword: string, categoryId?: number): Promise<PaginatedList<ProductListItem>> {
    const [items, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        ...productListItemParams(categoryId),
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
    return await this.findOne({ id });
  }
}
