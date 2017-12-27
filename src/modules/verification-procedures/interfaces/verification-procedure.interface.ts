import {Document} from 'mongoose';

export interface VerificationProcedureInterface extends Document {
  readonly name: string;
}
