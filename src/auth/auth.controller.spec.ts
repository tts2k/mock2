import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { createMock } from '@golevelup/ts-jest';
import { LoginAuthDto } from './dto/login.dto';
import { ExecutionContext } from '@nestjs/common';
import { SessionService } from 'src/session/session.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RefreshTokenAuthDto } from './dto/refresh-token.dto';
import { ResetPasswordAuthDto, ResetPasswordAuthQueryDto } from './dto/reset-password.dto';
import { EmailAuthDto } from './dto/email.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;
  let sessionService: SessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useValue: createMock<AuthService>() },
        { provide: SessionService, useValue: createMock<SessionService>() }
      ]
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
    sessionService = module.get<SessionService>(SessionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('login with email and password', async () => {
    const mockCtx = createMock<ExecutionContext>();
    const mockReq = mockCtx.switchToHttp().getRequest<Request>();
    const dto: LoginAuthDto = {
      email: 'test@test.com',
      password: 'password'
    }

    await controller.login(dto, mockReq);

    expect(authService.loginWithEmailAndPassword)
      .toHaveBeenCalledWith(dto.email, dto.password, mockReq.headers['user-agent'])
  })

  it('register and send confirm email', async () => {
    const dto: CreateUserDto = {
      username: 'test',
      password: 'test',
      email: 'test@test.com'
    }

    const result = await controller.register(dto)

    expect(authService.registerAndSendComfirmEmail).toHaveBeenCalledWith(dto);
    expect(result).toMatchObject({ message: "User has been successfully created." })
  })

  it('logout and session delete', async () => {
    const dto: RefreshTokenAuthDto = { refreshToken: 'token' }

    const result = await controller.logout(dto);

    expect(sessionService.delete).toHaveBeenCalledWith(dto);
    expect(result).toMatchObject({ message: "Logged out" });
  })

  it('refresh tokens', async () => {
    const mockCtx = createMock<ExecutionContext>();
    const mockReq = mockCtx.switchToHttp().getRequest<Request>();
    const dto: RefreshTokenAuthDto = { refreshToken: 'token' }

    await controller.refreshtoken(dto, mockReq);
    
    expect(authService.verifyRefreshToken).toHaveBeenCalledWith(dto.refreshToken);
    expect(authService.verifyRefreshToken).toReturn();
    expect(authService.createSession)
      .toHaveBeenCalledWith(authService.verifyRefreshToken(dto.refreshToken), mockReq.headers["user-agent"]);
  })

  it('confirm email verification token', async () => {
    const dto: ResetPasswordAuthQueryDto = {
      token: 'token'
    }

    await controller.verifyEmail(dto);

    expect(authService.verifyEmailToken).toHaveBeenCalledWith(dto.token);
  })

  it('resend email verification token', async () => {
    const dto: EmailAuthDto = {
      email: 'test@test.com'
    }

    await controller.resendEmail(dto);

    expect(authService.resendEmail).toHaveBeenCalledWith(dto.email);
  })

  it('forgot password', async () => {
    const dto: EmailAuthDto = {
      email: 'test@test.com'
    }

    await controller.requestResetPassword(dto);

    expect(authService.requestResetPasswordEmail(dto.email));
  })

  it('reset password', async () => {
    const dto: ResetPasswordAuthDto = {
      newPassword: 'password',
    }

    const queryDto: ResetPasswordAuthQueryDto = {
      token: 'token'
    }

    await controller.resetPassword(dto, queryDto);

    expect(authService.resetPassword(queryDto.token, dto.newPassword));
  })
});
