import * as passport from 'passport';
import {Module, RequestMethod} from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import {VerificationProceduresController} from './verification-procedures.controller';
import {VerificationProceduresService} from './verification-procedures.service';
import {verificationProcedureProviders} from './verification-procedures.providers';
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";

const routes: any[] = [
  { path: '/procedures', method: RequestMethod.ALL },
];

@Module({
  modules: [DatabaseModule],
  controllers: [VerificationProceduresController],
  components: [
    VerificationProceduresService,
    ...verificationProcedureProviders,
  ],
})
export class VerificationProceduresModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(passport.initialize()).with().forRoutes(...routes);
    consumer.apply(passport.authenticate('jwt', { session: false, failWithError: true})).forRoutes(...routes);
  }
}

