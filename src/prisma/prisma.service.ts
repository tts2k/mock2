import { INestApplication, Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { FilterAdminRight, HashPasswordMiddleware } from "./prisma.middleware";

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'info' | 'warn' | 'error' | 'query'> implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'event', level: 'error' },
        { emit: 'event', level: 'info'},
        { emit: 'event', level: 'warn'}
      ],
    })

    this.$on('query', (e) => this.logger.debug(`${e.query} ${e.params}`));
    this.$on('error', (e) => this.logger.error(e.message));
    this.$on('info', (e) => this.logger.verbose(e.message))
    this.$on('warn', (e) => this.logger.warn(e.message))

    this.$use(HashPasswordMiddleware());
    this.$use(FilterAdminRight());
  }
  
  async onModuleInit() {
      await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    })
  };
}
