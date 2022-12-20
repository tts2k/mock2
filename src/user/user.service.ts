import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User, Prisma } from "@prisma/client"
import { compare } from "bcrypt";
import { addDays, compareAsc } from "date-fns";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async findOne(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where 
    })
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput
  }, tx?: Prisma.TransactionClient): Promise<User> {
    const { where, data } = params;
    if (tx) {
      return tx.user.update({ data, where })
    }
    return this.prisma.user.update({ data, where })
  }

  async create(data: Prisma.UserCreateInput, tx?: Prisma.TransactionClient): Promise<User> {
    if (tx) {
      return tx.user.create({ data })
    }
    return this.prisma.user.create({ data });
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
}
