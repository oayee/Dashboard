import * as mongoose from 'mongoose';
import {DbConnectionToken} from '../constants';

export const databaseProviders = [
  {
    provide: DbConnectionToken,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://localhost/web', {
        useMongoClient: true,
      });
    },
  },
];
