import { Document } from 'mongoose';
import {Name} from "../../name/interfaces/name.interface";

export interface Cat extends Document {
  readonly name: Name;
  readonly age: number;
  readonly breed: string;
}
