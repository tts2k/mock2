import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User, Prisma } from "prisma/generated/prisma-client.js"

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput
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

  async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }
}
