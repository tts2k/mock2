import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { ServerResponse } from "http";
import { map, Observable } from "rxjs";
import { RetType } from "../common.interface";

@Injectable()
export class FormatResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const response = context.switchToHttp().getResponse<ServerResponse>();
    const defaultRes: RetType<any> = {
      message: "Success",
    }

    return next.handle().pipe(map(value => {
      const res = defaultRes;
      Object.assign(res, value);

      return { 
        statusCode: response.statusCode,
        ...res
      }
    }))
  }
}
