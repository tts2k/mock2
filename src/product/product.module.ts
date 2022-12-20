import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    PrismaModule,
    ConfigModule
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
