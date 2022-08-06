import { Connection } from 'mongoose';
import { DATABASE_CONNECTION, SHORT_LINK_MODEL } from './database.constants';
import { createShortLinkModel } from './short-link.model';

export const databaseModelsProviders = [
  {
    provide: SHORT_LINK_MODEL,
    useFactory: (connection: Connection) => createShortLinkModel(connection),
    inject: [DATABASE_CONNECTION],
  },
];
