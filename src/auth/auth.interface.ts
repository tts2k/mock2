import { Moment } from "moment";

export enum TokenType {
  ACCESS = 'access',
  REFRESH = 'refresh',
}
export interface AuthData {
  data: AuthRO,
  expires: {
    access: Moment,
    refresh: Moment
  }
}

export interface AuthRO {
  username: string;
  email: string;
  token: {
    access: string,
    refresh: string
  },
}

export interface JwtPayload {
  sub: number,
  iat: number,
  exp: number,
  type: TokenType
  username: string
}

export interface JwtConfig {
  accessExpirationMinutes: number,
  refreshExpirationDays: number
}
