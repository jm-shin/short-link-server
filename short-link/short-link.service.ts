import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ShortLink } from '../database/short-link.model';
import { from, Observable } from 'rxjs';
import { SHORT_LINK_MODEL } from '../database/database.constants';
var shortid = require('shortid');

@Injectable()
export class ShortLinkService {
  constructor(
    @Inject(SHORT_LINK_MODEL) private shortLinkModel: Model<ShortLink>,
  ) {}

  save(url: string): Observable<ShortLink> {
    const createPost: Promise<ShortLink> = this.shortLinkModel.create({
      shortId: shortid.generate(),
      url,
      createdAt: '',
    });
    return from(createPost);
  }
}
