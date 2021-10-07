import IClientModel from '@src/models/dnClient/IClientModel';
import mongoose from 'mongoose';

class ClientSchema {
  static get schema() {
    const schema = new mongoose.Schema({
      client_id: {
        type: String,
        required: true,
        unique: true,
      },
      client_secret: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        required: true,
      },
      updatedAt: {
        type: Date,
        required: true,
      },
    });
    return schema;
  }
}

export default mongoose.model<IClientModel>('dn_client', ClientSchema.schema);
