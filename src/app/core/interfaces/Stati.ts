import {status} from "../../devices/statuses";

export class Stati {
  pending: Date;
  accepted: Date;
  processing: Date;
  processed: Date;
  released: Date;
  curStatus: status;
}
