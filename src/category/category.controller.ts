import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Query } from '@nestjs/common';
import { Category } from '@prisma/client';
import { GetAllProductsQueryDto } from 'src/product/dto/get-all-products-query.dto';
import { CategoryService } from './category.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryDto } from './dto/category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DeleteCategoryDto } from './dto/delete-category.dto';
import { IgnoreAuth, UseAuth } from 'src/auth/auth.decorators';

@ApiTags('categories')
@UseAuth('category')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @IgnoreAuth()
  async getAllCategories(@Query() getAllCategoriesQueryDto: GetAllProductsQueryDto): Promise<Category[]> {
    return await this.categoryService.getAllCategories(getAllCategoriesQueryDto.q);
  }

  @Post()
  @ApiOperation({ summary: 'Create new category' })
  @ApiResponse({ status: HttpStatus.CREATED })
  async createCategory(@Body() categoryDto: CategoryDto) {
    return await this.categoryService.createCategory(categoryDto.name);
  }

  @Patch()
  @ApiOperation({ summary: 'Update/rename a category' })
  async updateCategory(@Body() updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryService.updateCategory(updateCategoryDto.id ,updateCategoryDto.name);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete category' })
  async deleteCategory(@Body() categoryDto: DeleteCategoryDto) {
    return await this.categoryService.deleteCategory(categoryDto.id);
  }
}
