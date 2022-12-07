import { Moment } from "moment";

export enum TokenType {
  ACCESS = 'access',
  REFRESH = 'refresh',
}
export interface AuthData {
  username: string;
  email: string;
  token: {
    access: string,
    refresh: string
  }
}

export interface JwtPayload {
  sub: number,
  iat: Moment,
  exp: Moment,
  type: TokenType
}
