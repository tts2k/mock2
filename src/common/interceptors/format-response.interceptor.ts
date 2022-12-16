import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { ServerResponse } from "http";
import { map, Observable } from "rxjs";

@Injectable()
export class FormatResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const response = context.switchToHttp().getResponse<ServerResponse>();

    return next.handle().pipe(map(value => {
      value = value ? value : { message: "Success" };
      return { 
        statusCode: response.statusCode,
        ...value
      }
    }))
  }
}
