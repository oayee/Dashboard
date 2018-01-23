import {Document} from 'mongoose';

export interface PrototypeInterface extends Document {
  readonly name: string;
}
