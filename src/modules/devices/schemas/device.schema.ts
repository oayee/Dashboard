import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import {VerificationProcedureModelName} from '../../constants';

export const DeviceSchema = new mongoose.Schema({
  client: String,
  protocol: String,
  status: String,
  svidNum: Number,
  povDate: Date,
  siName: String,
  siModel: String,
  siType: String,
  siSerial: String,
  tempHumidPress: String,
  povInterval: String,
  productionDate: String,
  regNum: String,
  povMethod: {
    type: ObjectId,
    ref: VerificationProcedureModelName
  }
},
  {
    collection: 'devices'
  });
