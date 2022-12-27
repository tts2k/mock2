import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ColorService } from 'src/color/color.service';
import { PaginatedList } from 'src/pagination/pagination.interface';
import { PaginationService } from 'src/pagination/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { productListItemParams } from './product.helpers';
import { ProductListItem } from './product.interface';

@Injectable()
export class ProductService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly paginationService: PaginationService,
    private readonly colorService: ColorService
  ) { }

  async create(dto: CreateProductDto): Promise<Product> {
    const mappedCategoryIds = dto.categoryIds.map((value: number) => ({ categoryId: value }));
    const mappedColors = dto.colors.map((value) => ({
      name: value.name,
      color: value.color
    }))

    console.log(mappedCategoryIds);

    const data: Prisma.ProductCreateInput = {
      name: dto.name,
      sku: dto.sku,
      price: dto.price,
      qty: dto.qty,
      description: dto.description,
      categories: {
        createMany: {
          data: mappedCategoryIds
        }
      },
      colors: {
        createMany: {
          data: mappedColors
        }
      }
    }

    return await this.prisma.product.create({ data })
  }

  async getAllProducts(
    page: number,
    categoryId?: number,
    additionalOptions?: {
      orderBy?: Prisma.Enumerable<Prisma.ProductOrderByWithRelationInput>,
      where?: Prisma.ProductWhereInput
    }
  ): Promise<PaginatedList<ProductListItem>> {
    const [items, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        ...productListItemParams([categoryId]),
        ...this.paginationService.getPaginationParams(page),
        ...additionalOptions
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
      });
    })
  }

  async getProductsByName(keyword: string, page: number, categoryId?: number): Promise<PaginatedList<ProductListItem>> {
    return await this.getAllProducts(page, categoryId, {
      where: {
        name: {
          contains: keyword,
          mode: 'insensitive'
        },
      }
    });
  }

  async getTopProducts(page: number, categoryId?: number): Promise<PaginatedList<ProductListItem>> {
    return await this.getAllProducts(page, categoryId, {
      orderBy: [
        {
          sold: 'desc'
        }
      ]
    });
  }

  async getProductById(id: number): Promise<Product> {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async deleteProduct(id: number): Promise<void> {
    await this.prisma.product.delete({
      where: { id },
    });

    return;
  }

  async updateProduct(productId: number, dto: UpdateProductDto): Promise<void> {
    const mappedCategoryIds = dto.categoryIds.map((value: number) => ({ categoryId: value }));

    const data: Prisma.ProductUpdateInput = {
      name: dto.name,
      sku: dto.sku,
      price: dto.price,
      qty: dto.qty,
      description: dto.description,
      categories: {
        deleteMany: {},
        createMany: {
          data: mappedCategoryIds
        }
      }
    }

    return await this.prisma.$transaction(async (tx) => {
      const productPromise = tx.product.update({
        data,
        where: { id: productId },
      })

      const colorPromise = this.colorService.updateColors(dto.colors, tx);

      await Promise.all([productPromise, colorPromise]);
    })
  }
}
