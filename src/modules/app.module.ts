import { Module } from '@nestjs/common';
import {AppController} from './app.controller';
import {DogsController} from './dogs/dogs.controller';
import {DogsService} from './dogs/dogs.service';
import {CatsModule} from './cats/cats.module';
import {NameModule} from './name/name.module';
import {VerificationProceduresModule} from './verification-procedures/verification-procedures.module';

@Module({
  controllers: [
    AppController,
    DogsController
  ],
  modules: [
    CatsModule,
    NameModule,
    VerificationProceduresModule
  ],
  components: [
    DogsService
  ]
})
export class ApplicationModule {}
