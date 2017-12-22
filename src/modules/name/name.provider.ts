import {DbConnectionToken} from "../constants";
import {Connection} from "mongoose";
import {NameSchema} from "./schemas/name.schema";

export const nameProviders = [
  {
    provide: 'NameModelToken',
    useFactory: (connection: Connection) => connection.model('Name', NameSchema),
    inject: [DbConnectionToken],
  },
];
