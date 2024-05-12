export interface IUser {
  _id: string;
  email: string;
  username: string;
  is_user_verified: boolean;
  token: string;
  user_status: string | boolean | null;
  date_created: string;
  date_updated: string;
  account_type: string;
  google_access_token: string;
  id_token: string;
}

// LOGIN
export interface ILoginRequestPayload {
  email?: string;
  password?: string;
  account_type?: 'influencers' | 'google';
  id_token?: string;
  google_access_token?: string;
  response?: string;
}

export interface ILoginResponsePayload {
  data: IUser[];
  server_response: string;
  success: boolean;
}

export enum AccountType {
  INFLUENCERS = 'influencers',
  GOOGLE = 'google',
}

export interface IRegisterForm {
  password: string;
  email: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  account_type: 'influencers' | 'google';
  id_token?: string;
  google_access_token?: string;
}

export type IRegisterRequestPayload = IRegisterForm;

// {
//   "data": {
//     "id": "66272cc87e4ea20eb6647d96"
//   },
//   "success": true,
//   "server_response": "Successfully Created User"
// }

// REGISTER PASSWORD
export type IRegisterResponsePayload = {
  data: { id: string };
  success: boolean;
  server_response: string;
};

// RESET PASSWORD
export interface IResetPasswordRequestPayload {
  email: string;
}

export interface IResetPasswordResponsePayload {
  server_response: string;
}

// CHANGE PASSWORD
export interface IChangePasswordRequestPayload {
  new_password: string;
  reset_token?: string;
  email?: string;
}

export interface IChangePasswordResponsePayload {
  server_response: string;
  success: boolean;
}
