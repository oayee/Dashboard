import { Status } from './Status';

export interface IElement {
  svidNumber: number;
  // povDate: Date;
  siOwner: string;
  // siName: string;
  // siType: string;
  // siModel: string;
  // siSerialNum: string;
  // needsProtocol: number;
  // temperature: number;
  // humidity: number;
  // pressure: number;
  // siRegNum: string;
  // povInterval: number;
  productionDate: number;
  // povMethod: string;
  // comment: string;
  status: Status;
}
