import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from 'prisma/generated/prisma-client.js';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) { }

  async sendUserConfirmation(user: User, token: string) {
    const baseurl = this.configService.get('BASE_URL');
    const url = `${baseurl}/auth/confirm?token=${token}`

    await this.mailerService.sendMail({
      to: user.email,
      from: this.configService.get<string>('MAILER_FROM'),
      subject: "Please confirm your email address",
      html: "<div>Hello</div>"
    })
  }
}
