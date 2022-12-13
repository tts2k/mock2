import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { validate } from './env.validation';
import { SessionModule } from './session/session.module';
import { APP_FILTER } from '@nestjs/core';
import { PrismaFilter } from './prisma/prisma.filter';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      cache: true
    }),
    
    PrismaModule,
    UserModule,
    JwtModule,
    AuthModule,
    SessionModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: PrismaFilter
    },
    AppService
  ],
})
export class AppModule {}
