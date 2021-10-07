import { Router } from 'express';
import ChangePasswordUser from './ChangePasswordUser';
import signUp from './SignUp';
export default class UserRouter {
  public router: Router = Router();

  constructor() {
    signUp(this.router);
    ChangePasswordUser(this.router);
  }
}
