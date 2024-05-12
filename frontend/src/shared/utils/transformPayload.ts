import sign from 'jwt-encode';

import { jwtDecode } from 'jwt-decode';

import { CONFIG } from '../config/config';

type TransformPayloadOptions = {
  hasAccessToken?: boolean;
};

export const transformPayload = <T>(
  payload?: T,
  options?: TransformPayloadOptions
): string => {
  // const user = ls.get(COMMON.USER) as IUser;
  const user = { token: '' };

  // Generate current time and expired at 1 mins
  // const currentTime = Math.floor(Date.now() / 1000);
  // const expiredAt = currentTime + 60;

  const data = {
    ...payload,
    access_token: options?.hasAccessToken === false ? undefined : user?.token,
  };

  const jwt = sign(data, CONFIG.ACCESS_SECRET);
  return jwt;
};

export function decodeToken<T>(token?: string | null): T | null {
  if (!token) return null;

  return jwtDecode(token);
}
