import { Module } from '@nestjs/common';
import {AppController} from './app.controller';
import {CatsController} from './cats.controller';

@Module({
  controllers: [AppController, CatsController],
})
export class ApplicationModule {}
