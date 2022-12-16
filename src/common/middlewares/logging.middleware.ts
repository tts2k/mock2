import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const startAt: [number, number] = process.hrtime();
    const { ip, method, originalUrl } = req;

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get("content-length");
      const diff = process.hrtime(startAt);
      const resTime = diff[0] * 1000 + diff[1] / 1000000;

      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${resTime}ms ${contentLength} - ${ip}`
      )
    })

    next();
  }
}
