import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ILoginUser, ILoginUserResponse } from './auth.interface';
import { User } from '../user/user.model';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  const isUserExist = await User.isUserExist(email);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (password !== isUserExist.password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }
  return {
    email: isUserExist.email,
  };
};

// const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
//   //verify token
//   // invalid token - synchronous
//   let verifiedToken = null;
//   try {
//     verifiedToken = jwtHelpers.verifyToken(
//       token,
//       config.jwt.refresh_secret as Secret,
//     );
//   } catch (err) {
//     throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
//   }

//   const { userId } = verifiedToken;

//   // tumi delete hye gso  kintu tumar refresh token ase
//   // checking deleted user's refresh token

//   const isUserExist = await User.isUserExist(userId);
//   if (!isUserExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
//   }
//   //generate new token

//   const newAccessToken = jwtHelpers.createToken(
//     {
//       id: isUserExist.id,
//       role: isUserExist.role,
//     },
//     config.jwt.secret as Secret,
//     config.jwt.expires_in as string,
//   );

export const AuthService = {
  loginUser,
};
