import IAccessTokenModel from '@src/models/dnAccessToken/IAccessTokenModel';
import AccessTokenSchema from '@src/schemas/AccessTokenSchema';
import { RepositoryBase } from './base';

export default class AccessTokenRepository extends RepositoryBase<IAccessTokenModel> {
  constructor() {
    super(AccessTokenSchema);
  }
}
