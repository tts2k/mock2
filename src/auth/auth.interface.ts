import { Request } from "express";

export interface JwtUser {
  username: string,
  userId: number
}

export type ReqWithUser = Request & { user: JwtUser }

export enum TokenType {
  ACCESS = 'access',
  REFRESH = 'refresh',
  VERIFY_EMAIL = 'verify_email',
  RESET_PASSWORD = 'reset_password'
}
export interface AuthData {
  data: AuthRO,
  expires: {
    access: Date,
    refresh: Date
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
  refreshExpirationDays: number,
  emailVerificationSecret: string,
  emailVerificationExpirationHours: number,
  resetPasswordSecret: string,
  resetPasswordExpirationHours: number
}
