import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) { }

  async getAllCategories(searchKeyword?: string): Promise<Category[]> {
    const where: Prisma.CategoryWhereInput = (searchKeyword) ? { name: { contains: searchKeyword } } : undefined;

    return await this.prisma.category.findMany({
      where
    })
  }

  async createCategory(name: string): Promise<Category> {
    return await this.prisma.category.create({ data: { name }});
  }

  async updateCategory(id:number, name: string): Promise<Category> {
    return await this.prisma.category.update({
      data: { name },
      where: { id }
    });
  }

  async deleteCategory(id: number): Promise<void> {
    await this.prisma.category.delete({
      where: { id }
    })
  }
} 
