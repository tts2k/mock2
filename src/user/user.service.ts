import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User, Prisma } from "@prisma/client"
import { compare } from "bcrypt";
import { addDays, compareAsc } from "date-fns";
import { UserAuth } from "./user.interface";
import { findUniqueForAuthParams } from "./user.helpers";
import { exclude } from "src/common/common.utils";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async findOne(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where,
    })
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput
  }, tx?: Prisma.TransactionClient): Promise<User> {
    const { where, data } = params;

    const updateData = exclude(data, ['isAdmin']); // Make sure isAdmin cannot be included in data
    return tx.user.update({ data: updateData, where })
  }

  async create(data: Prisma.UserCreateInput, tx: Prisma.TransactionClient): Promise<User> {
    const createData = exclude(data, ['isAdmin']); // Make sure isAdmin cannot be included in data
    return tx.user.create({ data: createData })
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }

  async findAndCheckVerified(email: string, password: string): Promise<User> {
    const user: User = await this.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    const isPasswordCorrect: boolean = await compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Password is incorrect.');
    }

    const oneDayAfterCreatedDate: Date = addDays(user.createdAt, 1);

    if (compareAsc(oneDayAfterCreatedDate, new Date()) < 1) {
      throw new UnauthorizedException('Email is not verified. You cannot login after one day without activating your account first.');
    }

    return user
  }

  async updateUserEmailVerification(id: number) {
    return await this.update({
      where: { id },
      data: {
        active: true
      }
    })
  }

  async updateUserPassword(id: number, newPassword: string) {
    return await this.update({
      where: { id },
      data: {
        password: newPassword
      }
    })
  }

  async getUserForAuth(userId: number): Promise<UserAuth> {
    const user = await this.prisma.user.findUnique({
      ...findUniqueForAuthParams,
      where: { id: userId }
    })

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }

  async updateUserRoles(userId: number, roleIds: number[]) {
    const mappedRoleIds: { id: number }[] = roleIds.map(r => ({ id: r }));
    return await this.prisma.user.update({
      where: { id: userId },
      data: {
        role: {
          set: mappedRoleIds
        }
      }
    })
  }
}
