import { Connection } from 'mongoose';
import {DbConnectionToken, VerificationProcedureModelName, VerificationProcedureModelToken} from '../constants';
import {VerificationProcedureSchema} from './schemas/verification-procedure.schema';

export const verificationProcedureProviders = [
  {
    provide: VerificationProcedureModelToken,
    useFactory: (connection: Connection) => connection.model(VerificationProcedureModelName, VerificationProcedureSchema),
    inject: [DbConnectionToken],
  },
];
