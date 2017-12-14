import { Connection } from 'mongoose';
import { CatSchema } from './schemas/cat.schema';
import {DbConnectionToken} from '../constants';

export const catsProviders = [
  {
    provide: 'CatModelToken',
    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),
    inject: [DbConnectionToken],
  },
];
