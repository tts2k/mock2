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
  iat: number,
  exp: number,
  type: TokenType
}

export interface JwtConfig {
  secret: string,
  accessExpirationMinutes: number,
  refreshExpirationDays: number
}
