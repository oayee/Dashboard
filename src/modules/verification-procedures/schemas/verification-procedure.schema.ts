import * as mongoose from 'mongoose';

export const VerificationProcedureSchema = new mongoose.Schema({
  name: String
},
  {
    collection: 'verificationProcedures'
  });
