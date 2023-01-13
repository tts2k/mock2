import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UseAuth } from 'src/auth/auth.decorators';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleIdDto } from './dto/role-id.dto';
import { RoleService } from './role.service';
import { RetType } from 'src/common/common.interface';
import { Role } from '@prisma/client';
import { UpdateRolePermissionsDto } from './dto/update-role-permissions.dto';

@Controller('role')
@UseAuth('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) { }

  @Post()
  @ApiOperation({ summary: "Create new role" })
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<RetType<Role>>{
    const { name, perms } = createRoleDto;
    return { data: await this.roleService.createRole(name, perms) };
  }

  @Delete(':id')
  @ApiOperation({ summary: "Delete role" })
  async deleteRole(@Param() roleIdParam: RoleIdDto): Promise<void> {
    await this.roleService.deleteRole(roleIdParam.id);

    return;
  }

  @Put(':id')
  @ApiOperation({ summary: "Update permissions for role" })
  async updateRole(
    @Param() roleIdParam: RoleIdDto,
    updateRolePermissionDto: UpdateRolePermissionsDto
  ): Promise<void> {
    await this.roleService.updatePermissionForRole(roleIdParam.id, updateRolePermissionDto.perms)
  }
}
