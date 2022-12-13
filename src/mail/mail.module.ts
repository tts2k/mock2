import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { MailService } from './mail.service';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get<string>('MAILER_HOST'),
          port:  config.get<number>('MAILER_PORT'),
          auth: {
            user: config.get<string>('MAILER_USER'),
            pass: config.get<string>('MAILER_PASS')
          },
          defaults: {
            from: `"No Reply <${config.get('MAIL_FROM')}>`
          },
          templates: {
            dir: join(__dirname, './templates'),
            adapter: new PugAdapter(),
            options: {
              strict:  true
            }
          }
        }
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
