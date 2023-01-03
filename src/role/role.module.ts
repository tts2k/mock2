import { Module } from '@nestjs/common';
import { PermissionModule } from 'src/permission/permission.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';

@Module({
  imports: [
    PrismaModule,
    PermissionModule
  ],
  providers: [RoleService],
  exports: [RoleService],
  controllers: [RoleController]
})
export class RoleModule {}
