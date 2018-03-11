import {Stati} from "./Stati";

export class IDevice {
  _id: string;
  client: string;
  siName: string;
  siType: string;
  siModel: string;
  siSerial: string;
  siProdDate: string;
  siRegNum: string;
  svidNum: number;
  status: Stati;
  nextPovDate: Date;
  povMethod: string;
  povPlace: string;
  povResult: boolean;
  gauger: string;
  supervisor: string;
  ctrlProto: string;
}

