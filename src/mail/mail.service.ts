import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from 'prisma/generated/prisma-client.js';
import { createTransport, Transporter } from 'nodemailer';
import { promises as fs } from 'fs';
import Handlebars from 'handlebars';
import { TemplateConfig } from './mail.interface';
import Mail from 'nodemailer/lib/mailer';
import { join } from 'path';

@Injectable()
export class MailService {
  private readonly transporter: Transporter;
  private readonly logger: Logger = new Logger(MailService.name);

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.transporter = createTransport({
      host: configService.get('MAILER_HOST'),
      port: configService.get('MAILER_PORT'),
      auth: {
        user: configService.get('MAILER_USER'),
        pass: configService.get('MAILER_PASS')
      }
    })
  }

  async sendEmailWithTemplate(options: Mail.Options, config: TemplateConfig) {
    try {
      const templateBuffer = await fs.readFile(join(__dirname, `/templates/${config.name}.hbs`))
      const html = Handlebars.compile(templateBuffer.toString());

      return await this.transporter.sendMail({
        ...options,
        html: html(config.context)
      })
    }
    catch (error) {
      this.logger.error(error.message);
    }
  }

  async sendUserConfirmation(user: User, token: string) {
    const baseurl = this.configService.get('BASE_URL');
    const url = `${baseurl}/auth/confirm?token=${token}`

    this.sendEmailWithTemplate({
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
}
