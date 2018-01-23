import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
  passport: String,
  role: {
    type: Number,
    default: 0
  },
  password: String,
  nickname: {
    type: String,
    unique: true
  },
  name: String,
  surname: String,
  middleName: String,
  alias: String,
  access_token: String
});

ProfileSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    delete ret.password;
  }
});
