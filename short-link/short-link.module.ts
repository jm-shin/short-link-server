import { Module } from '@nestjs/common';
import { ShortLinkController } from './short-link.controller';
import { ShortLinkService } from './short-link.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ShortLinkController],
  providers: [ShortLinkService],
})
export class ShortLinkModule {}
