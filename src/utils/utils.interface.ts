import { HttpStatus } from "@nestjs/common";

export interface ResType<T> {
  status: HttpStatus,
  message: string,
  data: T
}
