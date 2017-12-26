import { Document } from 'mongoose';
import {VerificationProcedureInterface} from '../../verification-procedures/interfaces/verification-procedure.interface';

export interface DeviceInterface extends Document {
  readonly client: string;
  readonly protocol: string;
  readonly status: string;
  readonly svidNum: number;
  readonly povDate: Date;
  readonly siName: string;
  readonly siModel: string;
  readonly siType: string;
  readonly siSerial: string;
  readonly tempHumidPress: string;
  readonly povInterval: string;
  readonly productionDate: string;
  readonly regNum: string;
  readonly povMethod: VerificationProcedureInterface;
}
