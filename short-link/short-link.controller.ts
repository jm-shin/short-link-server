import { Body, Controller, Post } from '@nestjs/common';
import { ShortLinkService } from './short-link.service';
import { Observable } from 'rxjs';
import { ShortLink } from '../database/short-link.model';

@Controller('short-link')
export class ShortLinkController {
  constructor(private shortLinkService: ShortLinkService) {}

  @Post('')
  create(@Body('url') url: string): Observable<ShortLink> {
    return this.shortLinkService.save(url);
  }
}
