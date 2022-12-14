import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User, Prisma } from "prisma/generated/prisma-client.js"

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where 
    })
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data, where
    })
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }

  async verifyEmail(id: number) {
    this.update({
      where: { id },
      data: {
        active: true
      }
    })
  }
}
