import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Coupon, Product, Review } from '@prisma/client';
import { CouponService } from 'src/coupon/coupon.service';
import { PaginatedList } from 'src/pagination/pagination.interface';
import { GetAllProductsQueryDto } from './dto/get-all-products-query.dto'; 
import { GetProductParamDto } from './dto/get-product-param.dto';
import { GetRelatedProductQueryDto } from './dto/get-related-product-query.dto';
import { ValidateCouponQueryDto } from './dto/validate-coupon-query.dto';
import { ProductListItem } from './product.interface';
import { ProductService } from './product.service';
import { CouponRO } from 'src/coupon/coupon.interface';
import { ReviewService } from 'src/review/review.service';
import { SubmitReviewDto } from './dto/submit-review-dto';
import { ReqWithUser } from 'src/auth/auth.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateCouponDto } from './dto/create-coupon-dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { RetType } from 'src/common/common.interface';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly couponService: CouponService,
    private readonly reviewService: ReviewService,
  ){ }

  @Get()
  @ApiOperation({ summary: "Get all products" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  async getAllProducts(@Query() query: GetAllProductsQueryDto): Promise<RetType<PaginatedList<ProductListItem>>> {
    const { categoryId, page, q } = query;
    console.log(categoryId);
    console.log(query);
    const res = {
      data: q 
      ? await this.productService.getProductsByName(q, page, categoryId)
      : await this.productService.getAllProducts(page, categoryId)
    }
      
    return res;
  }

  @Post()
  @ApiOperation({ summary: "Create new product" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "Product created" })
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<RetType<Product>> {
    return { data: await this.productService.create(createProductDto) };
  }

  @Get('top')
  @ApiOperation({ summary:  "Get top products"})
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  async getTopProducts(@Query() getTopProductsQueryDto: GetAllProductsQueryDto): Promise<RetType<PaginatedList<ProductListItem>>> {
    const { page, categoryId, } = getTopProductsQueryDto;
    return { data : await this.productService.getTopProducts(page, categoryId) };
  }
  @Get(':id')
  @ApiOperation({ summary: "Get product detail from a product id"})
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  async getProduct(@Param() params: GetProductParamDto): Promise<RetType<Product>> {
    return { data: await this.productService.getProductById(params.id) }
  }

  @Delete(':id')
  @ApiOperation({ summary: "Delete a product" })
  async deleteProduct(@Param() params: GetProductParamDto): Promise<void> {
    await this.productService.deleteProduct(params.id);
    return
  }

  @Patch(':id')
  @ApiOperation({ summary: "Update a product" })
  async updateProduct(@Param() params: GetProductParamDto, @Body() updateProductDto: UpdateProductDto): Promise<void> {
    return await this.productService.updateProduct(params.id, updateProductDto);
  }

  /* Untested */
  @Get('id/related')
  @ApiOperation({ summary: "Get product"})
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  async getRelated(
    @Query() query: GetRelatedProductQueryDto,
    @Param() params: GetProductParamDto
  ): Promise<RetType<ProductListItem[]>> {
    return { data: await this.productService.getRelatedProducts(params.id, query.limit) };
  }

  /* Untested */
  @Get('verify-coupon')
  @ApiOperation({ summary: "Verify coupon" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  async verifyCoupton(
    @Query() query: ValidateCouponQueryDto,
    @Param() params: GetProductParamDto
  ): Promise<RetType<CouponRO>> {
    return { data: await this.couponService.validateCoupon(query.code, params.id) }
  }

  /* Untested */
  @Get(':id/reviews')
  @ApiOperation({ summary: "Get all reviews of a product" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  async getReviews(@Param() params: GetProductParamDto): Promise<RetType<Review[]>> {
    return { data: await this.reviewService.getReviewsByProductId(params.id) };
  }

  /* Untested */
  @Post(':id/review')
  @ApiOperation({ summary: "Submit new review" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "Review created" })
  async submitReview(
    @Param() params: GetProductParamDto,
    @Body() submitReviewDto: SubmitReviewDto,
    @Req() req: Readonly<ReqWithUser>
  ): Promise<RetType<Review>>{
    const user = req.user;

    const review = await this.reviewService.createReview({
      content: submitReviewDto.content,
      rating: submitReviewDto.rating,
      user: {
        connect: {
          id: user.userId
        }
      },
      product: {
        connect: {
          id: params.id
        }
      }
    }) 

    return { data: review }
  }

  /* Untested */
  @Post(':id/coupon')
  async createCoupon(
    @Param() params: GetProductParamDto,
    @Body() createCouponDto: CreateCouponDto
  ): Promise<RetType<Coupon>> {
    const { code, expiresInDays } = createCouponDto;
    return { data: await this.couponService.createCoupon(code, params.id, expiresInDays) };
  }
}
