import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from 'prisma/generated/prisma-client.js';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    console.log(exception.code);

    if (exception.code === 'P2001') {
      response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        message: "Not found"
      })
    }
    else if (exception.code === 'P2002') {
      response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: "Duplicate value",
        fields: exception.meta.target
      })
    }
    else {
      super.catch(exception, host);
    }
  }
}
