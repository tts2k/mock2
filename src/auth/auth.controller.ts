import {
  BadRequestException,
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
import { ResetPasswordAuthDto } from './dto/resetPassword.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
  ) { }

  @Post('login')
  @ApiOperation({ summary: "Login with email and password" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'User does not exist or password is incorrect.' })
  async login(@Body() loginAuthDto: LoginAuthDto, @Req() req: Readonly<Request>): Promise<AuthRO> {
    const { email, password } = loginAuthDto;
    return await this.authService.loginWithEmailAndPassword(email, password, req.headers['user-agent']);
  }

  @Put('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Register new user" })
  async register(@Body() createUserDto: CreateUserDto) {
    const { username, password, email } = createUserDto;
    await this.authService.registerAndSendComfirmEmail({
      username, password, email
    })

    return { message: "User has been successfully created." }
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @ApiOperation({ summary: "Log out" })
  async logout(@Body() logoutAuthDto: RefreshTokenAuthDto) {
    await this.sessionService.delete({ refreshToken: logoutAuthDto.refreshToken })

    return { message: "Logged out" }
  }

  @Post('refresh-tokens')
  @ApiOperation({ summary: "Refresh tokens and create new session" })
  async refreshtoken(@Body() refreshTokenAuthDto: RefreshTokenAuthDto, @Req() req: Readonly<Request>) {
    const user: User = await this.authService.verifyRefreshToken(refreshTokenAuthDto.refreshToken);
    return await this.authService.createSession(user, req.headers["user-agent"])
  }

  @Get('confirm')
  @ApiOperation({ summary: "Confirm email verification token "})
  async verifyEmail(@Query('token') token: string) {
    if (!token || token === "") {
      throw new BadRequestException("Verification token must not be empty");
    }

    await this.authService.verifyEmailToken(token);

    return { message: "User verified" }
  }

  @Post('resend-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Resend email verification"})
  async resendEmail(@Body() resendEmailAuthDto: EmailAuthDto) {
    await this.authService.resendEmail(resendEmailAuthDto.email);
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Request an email to reset password" })
  async requestResetPassword(@Body() requestResetPasswordAuthDto: EmailAuthDto) {
    await this.authService.requestResetPasswordEmail(requestResetPasswordAuthDto.email);
  }

  @Post('reset')
  @ApiOperation({ summary: "Reset password" })
  async resetPassword(@Body() resetPasswordAuthDto: ResetPasswordAuthDto, @Query('token') token: string) {
    if (!token || token === '') {
      throw new BadRequestException("Token must not be empty");
    }
  
    this.authService.resetPassword(token, resetPasswordAuthDto.newPassword);
  }
}
