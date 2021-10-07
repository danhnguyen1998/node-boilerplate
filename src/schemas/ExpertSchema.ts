import IExpertModel from '@src/models/dnExpert/IExpertModel';
import { contants } from '@src/utils';
import mongoose from 'mongoose';

class ExpertSchema {
  static get schema() {
    const schema = new mongoose.Schema({
      fullname: {
        type: String,
        index: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      hashed_password: {
        type: String,
        // required: true,
      },
      salt: {
        type: String,
        // required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
      },
      avatar: {
        type: String,
      },
      total_amount: {
        type: Number,
        required: true,
      },
      is_virtual: {
        type: Boolean,
        required: true,
        default: 0,
      },
      status: {
        type: String,
        required: true,
        default: contants.STATUS.ACTIVE,
      },
    });
    return schema;
  }
}

export default mongoose.model<IExpertModel>('dn_expert', ExpertSchema.schema);
