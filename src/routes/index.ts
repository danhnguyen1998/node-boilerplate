import { Router } from 'express';
import ExpertsRouter from './experts';
import UsersRouter from './users';

class MainRoutes {
  public routers: Router;

  constructor() {
    this.routers = Router();
    this.config();
  }

  private config() {
    this.routers.use('/experts', new ExpertsRouter().router);
    this.routers.use('/users', new UsersRouter().router);
  }
}

export default new MainRoutes().routers;
