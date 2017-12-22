import { Connection } from 'mongoose';
import {DbConnectionToken} from '../constants';
import {VerificationProcedureSchema} from './schemas/verification-procedure.schema';

export const verificationProcedureProviders = [
  {
    provide: 'VerificationProcedureModelToken',
    useFactory: (connection: Connection) => connection.model('VerificationProcedure', VerificationProcedureSchema),
    inject: [DbConnectionToken],
  },
];
