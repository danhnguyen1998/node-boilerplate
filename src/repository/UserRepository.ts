import IUserModel from '@src/models/dnUser/IUserModel';
import UserSchema from '@src/schemas/UserSchema';
import { RepositoryBase } from './base';

export default class AdminRepository extends RepositoryBase<IUserModel> {
  constructor() {
    super(UserSchema);
  }
}
