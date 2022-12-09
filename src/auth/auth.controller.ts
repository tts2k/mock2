import { Body, Controller, HttpCode, HttpStatus, Post, Put, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthRO } from './auth.interface';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { SessionService } from 'src/session/session.service';
import bcrypt from 'bcrypt';
import { User } from 'prisma/generated/prisma-client.js';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LogoutAuthDto } from './dto/logout.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly sessionService: SessionService
  ) { }

  @Post('login')
  @ApiOperation({ summary: "Login with email and password" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'User does not exist or password is incorrect.' })
  async login(@Body() loginAuthDto: LoginAuthDto, @Req() req: Request): Promise<AuthRO> {
    const user: User = await this.userService.findOne({ email: loginAuthDto.email });
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    const isPasswordCorrect = await bcrypt.compare(loginAuthDto.password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Password is incorrect.');
    }

    const authData = await this.authService.generateAuthTokens(user);
    await this.sessionService.create({
      refreshToken: authData.data.token.refresh,
      expires: authData.expires.refresh.toDate(),
      deviceId: req.headers['user-agent']
    })

    return authData.data;
  }

  @Put('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Register new user" })
  async register(@Body() createUserDto: CreateUserDto) {
    await this.userService.create({
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
    });

    return { message: "User has been successfully created." }
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @ApiOperation({ summary: "Log out" })
  async logout(logoutAuthDto: LogoutAuthDto) {
    await this.sessionService.delete({ refreshToken: logoutAuthDto.refeshToken })

    return { message: "Logged out" }
  }
}
