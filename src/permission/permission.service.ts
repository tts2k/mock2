import { Injectable } from '@nestjs/common';
import { Permission } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) { }

  async createPermission(name: string): Promise<Permission> {
    return await this.prisma.permission.create({
      data: {
        name
      }
    })
  }

  async deletePermission(id: number): Promise<Permission> {
    return await this.prisma.permission.delete({ where: { id }});
  }

  async getAllPermissions(): Promise<Permission[]> {
    return await this.prisma.permission.findMany();
  }
}
