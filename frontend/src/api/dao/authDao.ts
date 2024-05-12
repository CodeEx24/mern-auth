import {
  ILoginRequestPayload,
  ILoginResponsePayload,
  IRegisterRequestPayload,
  IRegisterResponsePayload,
} from '@/shared/interfaces/IAuth';

import { transformPayload } from '@/shared/utils/transformPayload';

import { ENDPOINTS } from '@/shared/constants/ENDPOINTS';
import { useAxios } from '@/shared/hooks/useAxios';

// eslint-disable-next-line react-hooks/rules-of-hooks
const { POST } = useAxios();

export const useAuthDao = () => {
  // This line defines a function called login, which is used to perform a login operation.
  const login = async (payload: ILoginRequestPayload) => {
    console.log('LOGIN PAYLOAD: ', payload);
    const transformedPayload = transformPayload(payload, {
      hasAccessToken: false,
    });

    const formData = new FormData();
    formData.append('token', transformedPayload);

    const response = await POST<ILoginResponsePayload, any>({
      url: ENDPOINTS.AUTH.LOGIN,
      data: formData,
      // @ts-expect-error Ignoring TypeScript error for 'Content-Type' header because it is necessary for multipart/form-data requests.
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // This line returns the data received from the server response.
    return response.data;
  };

  const register = async (payload: IRegisterRequestPayload) => {
    console.log('PAYLOAD: ', payload);
    const transformedPayload = transformPayload(payload, {
      hasAccessToken: false,
    });

    const formData = new FormData();
    formData.append('token', transformedPayload);
    const response = await POST<IRegisterResponsePayload>({
      url: ENDPOINTS.AUTH.REGISTER,
      data: formData,
      // @ts-expect-error Ignoring TypeScript error for 'Content-Type' header because it is necessary for multipart/form-data requests.
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  };

  return {
    login,
    register,
  };
};
