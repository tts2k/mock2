import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Session, Prisma } from '@prisma/client';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) { }

  async findOne(where: Prisma.SessionWhereUniqueInput): Promise<Session | null> {
    return await this.prisma.session.findUnique({ where });
  }

  async create(data: Prisma.SessionCreateInput): Promise<Session> {
    return await this.prisma.session.create({ data });
  }

  async createOrReplace (data: Prisma.SessionUpsertWithWhereUniqueWithoutUserInput): Promise<Session> {
    return await this.prisma.session.upsert({
      create: data.create,
      update: data.update,
      where: data.where
    });
  }

  async delete(where: Prisma.SessionWhereUniqueInput) {
    return await this.prisma.session.delete({ where });
  }
}
