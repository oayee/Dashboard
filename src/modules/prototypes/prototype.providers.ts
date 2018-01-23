import {DbConnectionToken, PrototypeModelName, PrototypeModelToken} from '../constants';
import {Connection} from 'mongoose';
import {PrototypeSchema} from "./schemas/prototype.schema"

export const prototypeProviders = [
  {
    provide: PrototypeModelToken,
    useFactory: (connection: Connection) => connection.model(PrototypeModelName, PrototypeSchema),
    inject: [DbConnectionToken]
  }
];
