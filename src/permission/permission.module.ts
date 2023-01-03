import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';

@Module({
  imports: [PrismaModule],
  providers: [PermissionService],
  exports: [PermissionService],
  controllers: [PermissionController]
})
export class PermissionModule { }
