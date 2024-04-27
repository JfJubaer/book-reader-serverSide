import { Model } from 'mongoose';

export type IUser = {
  email: string;
  password: string;
};

export type UserModel = {
  // isUserExist(
  //   // eslint-disable-next-line no-unused-vars
  //   phoneNumber: string,
  // ): Promise<Pick<IUser, '_id' | 'role' | 'password'>>;
  isPasswordMatched(
    // eslint-disable-next-line no-unused-vars
    givenPassword: string,
    // eslint-disable-next-line no-unused-vars
    savedPassword: string,
  ): Promise<boolean>;
} & Model<IUser>;
