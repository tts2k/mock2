import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { CouponService } from 'src/coupon/coupon.service';
import { PaginatedList } from 'src/pagination/pagination.interface';
import { GetAllProductsQueryDto } from './dto/get-all-products-query.dto'; 
import { GetProductParamDto } from './dto/get-product-param.dto';
import { GetRelatedProductQueryDto } from './dto/get-related-product-query.dto';
import { ValidateCouponQueryDto } from './dto/validate-coupon-query.dto';
import { ProductListItem } from './product.interface';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly couponService: CouponService
  ){ }

  @Get('products')
  @ApiQuery({
    name: 'categoryId',
    required: true,
    description: 'Id of category to filter',
    type: Number
  })
  @ApiOperation({ summary: "Get all products" })
  async getAllProducts(@Query() query: GetAllProductsQueryDto): Promise<PaginatedList<ProductListItem>> {
    const { categoryId, page, q } = query;

    return q 
      ? await this.productService.getProductsByName(q, page, categoryId)
      : await this.productService.getAllProducts(page, categoryId);
  }
  
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Product id',
    type: Number
  })
  @Get('products/:id')
  @ApiOperation({ summary: "Get product detail from a product id"})
  async getProduct(@Param() params: GetProductParamDto): Promise<Product> {
    return await this.productService.getProductById(params.id);
  }

  @Get('products/:id/related')
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items to query. Maximum 20 items (default is 10)',
    type: Number
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Product id',
    type: Number
  })
  @ApiOperation({ summary: "Get product"})
  async getRelated(@Query() query: GetRelatedProductQueryDto, @Param() params: GetProductParamDto): Promise<ProductListItem[]> {
    return await this.productService.getRelatedProducts(params.id, query.limit);
  }

  @Get('verify-coupon')
  @ApiQuery({
    name: 'code',
    required: true,
    description: 'Coupon code to check',
    type: String
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Product id',
    type: Number
  })
  @ApiOperation({ summary: "Verify coupon" })
  async verifyCoupton(@Query() query: ValidateCouponQueryDto, @Param() params: GetProductParamDto): Promise<any> {
    return await this.couponService.validateCopuon(query.code, params.id)
  }
}
