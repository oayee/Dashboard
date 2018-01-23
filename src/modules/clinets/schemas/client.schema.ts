import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;

export const ClientSchema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNumber: String,
},
  {
    collection: 'clients'
  })
