import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolePerm } from './role.interface';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async createRole(name: string, perms: RolePerm[]): Promise<Role> {
    const mappedPermsData: Prisma.PermissionsOnRoleCreateManyRoleInput[] = perms.map(p => ({
            permissionId: p.id,
      mode: p.mode
    }));

    return await this.prisma.role.create({ data: {
      name,
      permissionsOnRole: {
        createMany: {
          data: mappedPermsData
        }
      }
    }})
  }

  async deleteRole(id: number) {
    return await this.prisma.role.delete({ where: { id }});
  }

  async updatePermissionForRole(id: number, perms: RolePerm[]) {
    const mappedPermsData: Prisma.PermissionsOnRoleCreateManyRoleInput[] = perms.map(p => ({
      permissionId: p.id,
      mode: p.mode
    }));

    return await this.prisma.role.update({ 
      where: { id },
      data: {
        permissionsOnRole: {
          deleteMany: {},
          createMany: {
            data: mappedPermsData
          }
        }
      }
    })
  }
}
