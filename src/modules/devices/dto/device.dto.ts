import {Stati} from "../../../app/core/interfaces/Stati";

export class DeviceDto {
  readonly client: string;
  readonly siName: string;
  readonly siType: string;
  readonly siModel: string;
  readonly siSerial: string;
  readonly siProdDate: Date;
  readonly siRegNum: string;
  readonly svidNum: number;
  readonly status: Stati;
  readonly nextPovDate: Date;
  readonly povMethod: string;
  readonly povPlace: string;
  readonly povResult: boolean;
  readonly gauger: string;
  readonly supervisor: string;
  readonly ctrlProto: string[];
}
