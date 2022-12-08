import { Body, Controller, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import { AuthData } from './auth.interface';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcrypt';
import { User } from 'prisma/generated/prisma-client.js';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) { }

  @Post('login')
  @ApiOperation({ summary: "Login with email and password" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'User does not exist or password is incorrect.' })
  async login(@Body() loginAuthDto: LoginAuthDto): Promise<AuthData> {
    const user: User = await this.userService.findOne({ email: loginAuthDto.email });
    if (!user) {
      throw new HttpException('User does not exist.', HttpStatus.UNAUTHORIZED);
    }

    const isCorrect = await bcrypt.compare(loginAuthDto.password, user.password);
    if (!isCorrect) {
      throw new HttpException('Password is incorrect.', HttpStatus.UNAUTHORIZED);
    }

    return await this.authService.generateAuthTokens(user);
  }

  @Put('register')
  @ApiOperation({ summary: "Register new user" })
  async register(@Body() createUserDto: CreateUserDto) {
    await this.userService.create({
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
    });

    return { message: "User has been successfully created." }
  }
}
