import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import {DevicesController} from './devices.controller';
import {DevicesService} from './devices.service';
import {devicesProviders} from './devices.provideres';

@Module({
  modules: [DatabaseModule],
  controllers: [DevicesController],
  components: [
    DevicesService,
    ...devicesProviders,
  ],
})
export class DevicesModule {}
