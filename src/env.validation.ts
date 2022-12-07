import { plainToInstance } from 'class-transformer';
import { IsEnum, IsString, IsNumber, validateSync } from 'class-validator';

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
  JWT_SECRET: string;

  @IsNumber()
  JWT_ACCESS_EXPIRE_MINUTES: number = 30;

  @IsNumber()
  JWT_ACCESS_EXPIRE_DAYS: number = 30;
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
