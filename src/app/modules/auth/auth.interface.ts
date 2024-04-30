export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  email: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
};
