import UserBussiness from '@src/business/UserBussiness';
import IUserModel from '@src/models/dnUser/IUserModel';
import { contants } from '@src/utils';
import { ChangePasswordUser, SignUp } from '@src/validator/users/users.validator';
import { NextFunction, Request, Response } from 'express';

export default class UserController {
  public async signUp(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const params = req.body;
      const data = new SignUp();
      data.fullname = params.fullname;
      data.username = params.username;
      data.password = params.password;
      data.email = params.email;
      data.avatar = params.avatar;
      data.status = contants.STATUS.ACTIVE;
      const userBusiness = new UserBussiness();
      const result = await userBusiness.signUp(data);

      res.status(200).send({data: result});
    } catch (err) {
      next(err);
    }
  }

  public async changePasswordUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const params = req.body;
      const data = new ChangePasswordUser();
      data._id = (req.user as IUserModel)._id.toString();
      data.new_password = params.new_password;
      data.current_password = params.current_password;
      const adminBusiness = new UserBussiness();
      const result = await adminBusiness.changePasswordAdmin(data);

      res.status(200).send({data: result});
    } catch (err) {
      next(err);
    }
  }
}
