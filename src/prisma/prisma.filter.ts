import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    switch(exception.code) {
      case 'P2001':
        response.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          message: "Not found"
        })
        break;
      case 'P2002':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: "Duplicate value",
          fields: exception.meta.target
        })
        break;
      case 'P2003':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: "Foreign key constraint error. Please check your foreign key id(s).",
          field: exception.meta.field_name
        })
        break;
      case 'P2004':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: exception.meta.database_error
        })
        break;
      case 'P2025':
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: exception.meta.cause
        })
        break;
      default:
        super.catch(exception, host);
    }
  }
}
