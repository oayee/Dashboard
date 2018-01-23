import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

export const PrototypeSchema = new mongoose.Schema({
  name: String,
},
  {
    collection: 'prototypes'
  })
