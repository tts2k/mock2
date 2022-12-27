import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { PrismaFilter } from './prisma/prisma.filter';
import { FormatResponseInterceptor } from './common/interceptors/format-response.interceptor';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('v1');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  // Filter prisma errors that should be handled
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaFilter(httpAdapter));

  // Format response so that even success reponses have statusCode in their body
  app.useGlobalInterceptors(new FormatResponseInterceptor())

  const config = new DocumentBuilder()
    .setTitle('Ecommerce')
    .setDescription('Ecommerce website')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const port = configService.get<number>('PORT');
  await app.listen(port, () => {
    Logger.log(`Listening on port ${port}`)
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
