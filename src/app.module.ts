import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { validate } from './env.validation';
import { SessionModule } from './session/session.module';
import { MailModule } from './mail/mail.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { FormatResponseInterceptor } from './common/interceptors/format-response.interceptor';
import { AppLoggerMiddleware } from './common/middlewares/logging.middleware';
import { ProductModule } from './product/product.module';
import { CouponModule } from './coupon/coupon.module';

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
    ProductModule,
    CouponModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: FormatResponseInterceptor
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AppLoggerMiddleware)
        .forRoutes('*');
  }
}
