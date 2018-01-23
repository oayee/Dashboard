import {Document} from 'mongoose';

export interface ClientInterface extends Document {
  readonly name: string;
  readonly address: string;
  readonly phoneNumber: string;
}
