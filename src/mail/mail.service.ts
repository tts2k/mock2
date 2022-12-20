import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import { createTransport, Transporter } from 'nodemailer';
import { promises as fs } from 'fs';
import Handlebars from 'handlebars';
import { TemplateConfig } from './mail.interface';
import Mail from 'nodemailer/lib/mailer';
import { join } from 'path';

@Injectable()
export class MailService {
  private readonly transporter: Transporter;
  private readonly baseUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.transporter = createTransport({
      host: configService.get('MAILER_HOST'),
      port: configService.get('MAILER_PORT'),
      auth: {
        user: configService.get('MAILER_USER'),
        pass: configService.get('MAILER_PASS')
      }
    })
    this.baseUrl = configService.get('BASE_URL');
  }

  private async sendEmailWithTemplate(options: Mail.Options, config: TemplateConfig) {
    const templateBuffer = await fs.readFile(join(__dirname, `/templates/${config.name}.hbs`))
    const html = Handlebars.compile(templateBuffer.toString());
    return await this.transporter.sendMail({
      ...options,
      html: html(config.context)
    })
  }

  async sendUserConfirmation(user: User, token: string) {
    const url = `${this.baseUrl}/auth/confirm?token=${token}`

    await this.sendEmailWithTemplate({
      from: `No Reply <${this.configService.get("MAILER_FROM")}>`,
      to: user.email,
      subject: "Please confirm your email address"
    }, {
      name: 'confirmation',
      context: {
        name: user.username,
        url
      }
    });
  }

  async sendResetPassword(user: User, token: string) {
    const url = `${this.baseUrl}/auth/reset?token=${token}`

    await this.sendEmailWithTemplate({
      from: `No Reply <${this.configService.get("MAILER_FROM")}>`,
      to: user.email,
      subject: "Please confirm your email address"
    }, {
      name: 'resetPassword',
      context: {
        name: user.username,
        url
      }
    });
  }
}
