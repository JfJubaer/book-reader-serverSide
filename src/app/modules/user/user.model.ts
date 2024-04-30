import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interfaces';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser, UserModel>(
  {
    password: {
      type: String,
      required: true,
      select: 0,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

userSchema.statics.isUserExist = async function (
  email: string,
): Promise<IUser | null> {
  return await User.findOne({ email }, { email: 1, password: 1 });
};

userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  console.log(givenPassword, savedPassword);
  return await bcrypt.compare(givenPassword, savedPassword);
};

// userSchema.pre('save', async function (next) {
//   // hashing user password
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bycrypt_salt_rounds),
//   );

//   next();
// });

export const User = model<IUser, UserModel>('User', userSchema);
