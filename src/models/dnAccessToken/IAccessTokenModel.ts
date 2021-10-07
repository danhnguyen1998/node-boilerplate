import mongoose, { Schema } from 'mongoose';

export default interface IAccessTokenModel extends mongoose.Document {
  client_id: string;
  id_user: Schema.Types.ObjectId;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}
