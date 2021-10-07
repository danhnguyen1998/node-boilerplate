import IUserModel from '@src/models/dnUser/IUserModel';
import UserRepository from '@src/repository/UserRepository';
import { security } from '@src/utils';
import { ChangePasswordUser, SignUp } from '@src/validator/users/users.validator';
import { validate } from 'class-validator';

export default class UserBussiness {
  private _userRepository: UserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  public async signUp(user: SignUp): Promise<IUserModel> {
    try {
      const errors = await validate(user);
      if (errors.length > 0) {
        throw new Error(Object.values(errors[0].constraints)[0]);
      } else {
        const securityPass = security.createHashedSalt(user.password);

        const userEntity = user as IUserModel;
        userEntity.hashed_password = securityPass.hashedPassword;
        userEntity.salt = securityPass.salt;

        const result = await this._userRepository.create(userEntity);
        if (result) {
          return {
            _id: result._id,
            fullname: result.fullname,
            username: result.username,
            email: result.email,
            avatar: result.avatar,
            status: result.status,
          } as IUserModel;
        }
        return null;
      }
    } catch (err) {
      throw err;
    }
  }

  public async changePasswordAdmin(params: ChangePasswordUser): Promise<boolean> {
    try {
      const errors = await validate(params);
      if (errors.length > 0) {
        throw new Error(Object.values(errors[0].constraints)[0]);
      } else {
        const admin = await this._userRepository.findById(params._id);
        if (admin) {
          const checked = security.checkPassword(params.current_password, admin.salt, admin.hashed_password);
          if (checked) {
            const securityPass = security.createHashedSalt(params.new_password);
            const result = await this._userRepository.update(this._userRepository.toObjectId(params._id), {
              hashed_password: securityPass.hashedPassword,
              salt: securityPass.salt,
            } as IUserModel);
            return result ? true : false;
          } else throw new Error('Current password is false');
        } else throw new Error('Account does not exist');
      }
    } catch (err) {
      throw err;
    }
  }
}
