import { createMock } from '@golevelup/ts-jest';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { Prisma, Session, User } from '@prisma/client';
import { addDays } from 'date-fns';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SessionService } from 'src/session/session.service';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { validate } from 'src/env.validation';
import { NotFoundException } from '@nestjs/common';

const username = 'test';
const email = 'test@test.com';
const userAgent = 'agent';
const password = 'test';
const token = 'token';
const tokenUserNotFound = 'token2';
const tokenSessionNotFound = 'token3';

const session: Session = {
  id: 1,
  refreshToken: token,
  userId: 1,
  deviceId: userAgent,
  expires: addDays(new Date(), 30),
  updatedAt: new Date(),
  createdAt: new Date()
}

const user: User = {
  id: 1,
  name: 'Test',
  active: true,
  verifyEmail: true,
  verifyContact: true,
  isAdmin: false,
  avatar: null,
  phoneNumber: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  addressId: null,
  username,
  password,
  email
}

describe('AuthService', () => {
  let service: AuthService;
  let sessionService: SessionService;
  let userService: UserService;
  let mailService: MailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ validate }),
      ],
      providers: [
        AuthService,
        ConfigService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue(token),
            verify: jest.fn().mockImplementation((tokenInput) => {
              if (tokenInput === token || tokenInput === tokenSessionNotFound) {
                return { sub: user.id }
              } else if (tokenInput === tokenUserNotFound) {
                return { sub: 2 }
              }
              else {
                return { }
              }
            })
          }
        },
        {
          provide: SessionService,
          useValue: {
            create: jest.fn().mockResolvedValue(session),
            findOne: jest.fn().mockImplementation((where: Prisma.SessionWhereUniqueInput) => 
              (where.refreshToken === token) ? session : null),
          }
        },
        {
          provide: UserService,
          useValue: {
            findAndCheckVerified: jest.fn().mockResolvedValue(user),
            create: jest.fn().mockResolvedValue(user),
            findOne: jest.fn().mockImplementation((where: Prisma.UserWhereUniqueInput) => 
              ((where.email && where.email === user.email) || (where.id && where.id === user.id)) ? user : null),
            updateUserEmailVerification: jest.fn().mockResolvedValue(user),
            update: jest.fn().mockResolvedValue(user),
          }
        },
        {
          provide: PrismaService,
          useValue: {
            $transaction: async (cb: Function) => cb()
          }
        },
        { provide: MailService, useValue: createMock<MailService>() }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    mailService = module.get<MailService>(MailService);
    sessionService = module.get<SessionService>(SessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('login with email and password', async () => {
    const result = await service.loginWithEmailAndPassword(email, password, userAgent);

    expect(result).toMatchObject({
      username,
      email,
      token: {
        access: token,
        refresh: token
      }
    });
  })

  it('register and send confirm email', async () => {
    await service.registerAndSendComfirmEmail({ username, password, email })
    
    expect(userService.create).toBeCalledTimes(1);
    expect(mailService.sendUserConfirmation).toBeCalledTimes(1);
  })

  it('resend email', async() => {
    await service.resendEmail(email);

    expect(userService.findOne).toBeCalledTimes(1);
    expect(mailService.sendResetPassword).toBeCalledTimes(1);
  })

  it('resend email fail', async () => {
    await expect(service.resendEmail(null)).rejects.toThrowError(NotFoundException);
  })

  it('request reset password email fail on invalid email', async () => {
    await expect(service.requestResetPasswordEmail(null)).rejects.toThrow(new NotFoundException('Email not found'));
  })

  it('request reset password email success', async () => {
    await service.requestResetPasswordEmail(email);
    expect(mailService.sendResetPassword).toBeCalledWith(user, token);
  })

  it('reset password', async () => {
    await service.resetPassword(token, password);

    expect(userService.update).toBeCalledTimes(1);
  })

  it('verify refresh token', async () => {
    await service.verifyRefreshToken(token);

    expect(userService.findOne).toBeCalledWith({ id: user.id });
    expect(sessionService.findOne).toBeCalledTimes(1);
  })

  it('verify refresh token fail user not found', async () => {
    await expect(service.verifyRefreshToken(tokenUserNotFound)).rejects.toThrow(new NotFoundException('User not found'));
  })

  it('verify refresh token fail session not found', async () => {
    await expect(service.verifyRefreshToken(tokenSessionNotFound)).rejects.toThrow(new NotFoundException('Session not found.'));
  })

  it('verify email token', async () => {
    await service.verifyEmailToken(token);

    expect(userService.updateUserEmailVerification).toBeCalledWith(user.id);
  })

  it('throw error when verify token fail', async () => {
    await expect(service.verifyEmailToken('not token')).rejects
      .toThrow(new NotFoundException('Could not find the user associated with this token.'));

  })
});
