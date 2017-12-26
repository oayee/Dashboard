import { Document } from 'mongoose';

export interface Profile extends Document {
  readonly id: string;
  readonly role: number;
  readonly nickname: string;
}
