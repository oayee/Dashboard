import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import {VerificationProceduresController} from './verification-procedures.controller';
import {VerificationProceduresService} from './verification-procedures.service';
import {verificationProcedureProviders} from './verification-procedures.providers';

@Module({
  modules: [DatabaseModule],
  controllers: [VerificationProceduresController],
  components: [
    VerificationProceduresService,
    ...verificationProcedureProviders,
  ],
})
export class VerificationProceduresModule {}

