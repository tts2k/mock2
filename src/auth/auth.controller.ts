import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthRO } from './auth.interface';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login.dto';
import { SessionService } from 'src/session/session.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RefreshTokenAuthDto } from './dto/refresh-token.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { EmailAuthDto } from './dto/email.dto';
import { ResetPasswordAuthDto, ResetPasswordAuthQueryDto } from './dto/reset-password.dto';
import { UseAuth, IgnoreAuth } from './auth.decorators';

@ApiTags('auth')
@UseAuth()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
  ) { }

  @Post('login')
  @IgnoreAuth()
  @ApiOperation({ summary: "Login with email and password" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'User does not exist or password is incorrect.' })
  async login(@Body() loginAuthDto: LoginAuthDto, @Req() req: Readonly<Request>): Promise<AuthRO> {
    const { email, password } = loginAuthDto;
    return await this.authService.loginWithEmailAndPassword(email, password, req.headers['user-agent']);
  }

  @Put('register')
  @IgnoreAuth()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Register new user" })
  async register(@Body() createUserDto: CreateUserDto) {
    await this.authService.registerAndSendComfirmEmail(createUserDto);

    return { message: "User has been successfully created." }
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @ApiOperation({ summary: "Log out" })
  async logout(@Body() logoutAuthDto: RefreshTokenAuthDto) {
    await this.sessionService.delete(logoutAuthDto);

    return { message: "Logged out" }
  }

  @Post('refresh-tokens')
  @IgnoreAuth()
  @ApiOperation({ summary: "Refresh tokens and create new session" })
  async refreshtoken(@Body() refreshTokenAuthDto: RefreshTokenAuthDto, @Req() req: Readonly<Request>) {
    const user: User = await this.authService.verifyRefreshToken(refreshTokenAuthDto.refreshToken);
    return await this.authService.createSession(user, req.headers["user-agent"])
  }

  @Get('confirm')
  @ApiOperation({ summary: "Confirm email verification token "})
  async verifyEmail(@Query() tokenDto: ResetPasswordAuthQueryDto) {
    await this.authService.verifyEmailToken(tokenDto.token);
    return { message: "User verified" }
  }

  @Post('resend-email')
  @IgnoreAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Resend email verification"})
  async resendEmail(@Body() resendEmailAuthDto: EmailAuthDto) {
    await this.authService.resendEmail(resendEmailAuthDto.email);
  }

  @Post('forgot-password')
  @IgnoreAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Request an email to reset password" })
  async requestResetPassword(@Body() requestResetPasswordAuthDto: EmailAuthDto) {
    await this.authService.requestResetPasswordEmail(requestResetPasswordAuthDto.email);
  }

  @Post('reset')
  @IgnoreAuth()
  @ApiOperation({ summary: "Reset password" })
  async resetPassword(@Body() resetPasswordAuthDto: ResetPasswordAuthDto, @Query() query: ResetPasswordAuthQueryDto) {
    const { token } = query;
    this.authService.resetPassword(token, resetPasswordAuthDto.newPassword);
  }
}
