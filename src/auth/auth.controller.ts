import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, Post, Put, Query, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthRO } from './auth.interface';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { SessionService } from 'src/session/session.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RefreshTokenAuthDto } from './dto/refreshToken.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { MailService } from 'src/mail/mail.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
    private readonly mailService: MailService,
  ) { }

  @Post('login')
  @ApiOperation({ summary: "Login with email and password" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'User does not exist or password is incorrect.' })
  async login(@Body() loginAuthDto: LoginAuthDto, @Req() req: Readonly<Request>): Promise<AuthRO> {
    const user: User = await this.userService.findOne({ email: loginAuthDto.email });
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    const isPasswordCorrect = await bcrypt.compare(loginAuthDto.password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Password is incorrect.');
    }
    return await this.authService.createSession(user, req.headers['user-agent']);
  }

  @Put('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Register new user" })
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create({
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
    });

    const verifyToken = this.authService.generateVerifyEmailToken(user);
    await this.mailService.sendUserConfirmation(user, verifyToken);

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
}
