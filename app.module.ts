import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortLinkModule } from './short-link/short-link.module';

@Module({
  imports: [ShortLinkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
