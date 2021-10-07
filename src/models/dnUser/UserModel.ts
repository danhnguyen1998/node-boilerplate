import IUserModel from './IUserModel';

export default class UserModel {
  private _UserModel: IUserModel;

  constructor(AdminModel: IUserModel) {
    this._UserModel = AdminModel;
  }
  get fullname(): string {
    return this._UserModel.fullname;
  }

  get username(): string {
    return this._UserModel.username;
  }

  get email(): string {
    return this._UserModel.email;
  }

  get avatar(): string {
    return this._UserModel.avatar;
  }

  get status(): string {
    return this._UserModel.status;
  }
}
