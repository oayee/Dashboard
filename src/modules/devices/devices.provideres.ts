import {DbConnectionToken, DeviceModelName, DeviceModelToken} from '../constants';
import {Connection} from 'mongoose';
import {DeviceSchema} from "./schemas/device.schema";

export const devicesProviders = [
  {
    provide: DeviceModelToken,
    useFactory: (connection: Connection) => connection.model(DeviceModelName, DeviceSchema),
    inject: [DbConnectionToken]
  }
];
