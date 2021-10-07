import IUserModel from '@src/models/dnUser/IUserModel';
import { contants } from '@src/utils';
import mongoose from 'mongoose';
class UserSchema {
  static get schema() {
    const schema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
        unique: true,
      },
      fullname: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      hashed_password: {
        type: String,
        required: true,
      },
      salt: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
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

export default mongoose.model<IUserModel>('dn_user', UserSchema.schema);
