import { Module } from '@nestjs/common';
import { PaginationModule } from 'src/pagination/pagination.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    PrismaModule,
    PaginationModule
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
