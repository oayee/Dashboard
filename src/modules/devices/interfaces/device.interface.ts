import { Document } from 'mongoose';
import {VerificationProcedureInterface} from '../../verification-procedures/interfaces/verification-procedure.interface';
import {Stati} from "../../../app/core/interfaces/Stati";
import {Profile} from "../../profile/interfaces/profile.interface";
import {ClientInterface} from "../../clinets/interfaces/client.interface";
import {PrototypeInterface} from "../../prototypes/interfaces/prototype.interface";

export interface DeviceInterface extends Document {
  readonly client: ClientInterface;
  readonly siName: string;
  readonly siType: string;
  readonly siModel: string;
  readonly siSerial: string;
  readonly siProdDate: Date;
  readonly siRegNum: string;
  readonly svidNum: number;
  readonly status: Stati;
  readonly nextPovDate: Date;
  readonly povMethod: VerificationProcedureInterface;
  readonly povPlace: string;
  readonly povResult: boolean;
  readonly gauger: Profile;
  readonly supervisor: Profile;
  readonly ctrlProto: PrototypeInterface[];
}
