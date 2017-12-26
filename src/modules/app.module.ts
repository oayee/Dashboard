import { Module } from '@nestjs/common';
import {AppController} from './app.controller';
import {NameModule} from './name/name.module';
import {VerificationProceduresModule} from './verification-procedures/verification-procedures.module';
import {DevicesModule} from './devices/devices.module';
import {AuthModule} from './auth/auth.module';
import {ProfileModule} from "./profile/profile.module";

@Module({
  controllers: [
    AppController
  ],
  modules: [
    NameModule,
    VerificationProceduresModule,
    DevicesModule,
    AuthModule,
    ProfileModule
  ]
})
export class ApplicationModule {}
