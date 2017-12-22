import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

export const CatSchema = new mongoose.Schema({
  name: {
    type: ObjectId,
    ref: 'Name'
  },
  age: Number,
  breed: String,
});
