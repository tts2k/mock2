import { plainToInstance } from 'class-transformer';
import { IsEnum, IsString, IsNumber, validateSync, IsNotEmpty } from 'class-validator';

enum NodeEnv {
  DEV = 'development',
  PROD = 'production',
  TEST = 'test',
}

class EnvironmentVariables {
  @IsEnum(NodeEnv)
  NODE_ENV: NodeEnv;

  @IsNumber()
  PORT: number = 3000;

  @IsString()
  @IsNotEmpty()
  BASE_URL: string;

  @IsString()
  @IsNotEmpty()
  JWT_SECRET: string;

  @IsNumber()
  JWT_ACCESS_EXPIRE_MINUTES: number = 30;

  @IsNumber()
  JWT_REFRESH_EXPIRE_DAYS: number = 30;

  @IsString()
  @IsNotEmpty()
  JWT_VERIFICATION_SECRET: string;
  
  @IsNumber()
  JWT_VERIFICATION_EXPIRE_HOURS: number = 24;

  @IsNumber()
  JWT_RESET_PASSWORD_EXPIRE_HOURS: number = 24;
  
  @IsString()
  @IsNotEmpty()
  JWT_RESET_PASSWORD_SECRET: string;

  @IsString()
  @IsNotEmpty()
  MAILER_HOST: string;

  @IsNumber()
  @IsNumber()
  MAILER_PORT: number;

  @IsString()
  @IsNotEmpty()
  MAILER_USER: string;

  @IsString()
  @IsNotEmpty()
  MAILER_PASS: string;

  @IsString()
  @IsNotEmpty()
  MAILER_FROM: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    EnvironmentVariables,
    config,
    { enableImplicitConversion: true },
  );
  const errors = validateSync(validatedConfig, { skipMissingProperties: false })

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
