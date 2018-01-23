import {DbConnectionToken, ClientModelName, ClientModelToken} from '../constants';
import {Connection} from 'mongoose';
import {ClientSchema} from "./schemas/client.schema";

export const clientProviders = [
  {
    provide: ClientModelToken,
    useFactory: (connection: Connection) => connection.model(ClientModelName, ClientSchema),
    inject: [DbConnectionToken]
  }
];
