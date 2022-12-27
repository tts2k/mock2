import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ColorService } from './color.service';

@Module({
  imports: [PrismaModule],
  providers: [ColorService],
  exports: [ColorService]
})
export class ColorModule {}
