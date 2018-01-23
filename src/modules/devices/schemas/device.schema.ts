import * as mongoose from 'mongoose';
import ObjectId = mongoose.Schema.Types.ObjectId;
import {ClientModelName, ProfileModelName, PrototypeModelName, VerificationProcedureModelName} from '../../constants';
//import {Stati} from "../../../app/core/interfaces/Stati";

export const DeviceSchema = new mongoose.Schema({

  client: {
    type: ObjectId,
    ref: ClientModelName,
  },
  siName: String,
  siType: String,
  siModel: String,
  siSerial: String,
  siProdDate: String,
  siRegNum: String,
  svidNum: Number,
  status: Object,
  nextPovDate: Date,
  povMethod:  {
    type: ObjectId,
    ref: VerificationProcedureModelName,
},
  povPlace: String,
  povResult: Boolean,
  gauger: {
    type: ObjectId,
    ref: ProfileModelName,
  },
  supervisor: {
    type: ObjectId,
    ref: ProfileModelName,
  },
  ctrlProto: [{
    type: ObjectId,
    ref: PrototypeModelName,
  }],

},
  {
    collection: 'devices'
  });
