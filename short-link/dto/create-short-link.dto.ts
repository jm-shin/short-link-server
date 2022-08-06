import { IsDefined } from 'class-validator';

export class CreateShortLinkDto {
  @IsDefined()
  readonly url: string;
}
