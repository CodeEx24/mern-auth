import { useMutation } from '@tanstack/react-query';
import {
  ILoginRequestPayload,
  IRegisterRequestPayload,
} from '@/shared/interfaces/IAuth';
import { useAuthDao } from '../dao/authDao';

const { login: loginDao, register: registerDao } = useAuthDao();

export const useAuthService = () => {
  const login = () => {
    const loginMutation = useMutation({
      mutationFn: (payload: ILoginRequestPayload) => loginDao(payload),
    });

    return {
      loginMutation,
    };
  };

  const register = () => {
    const registerMutation = useMutation({
      mutationFn: (payload: IRegisterRequestPayload) => registerDao(payload),
    });

    return {
      registerMutation,
    };
  };

  return {
    login,
    register,
  };
};
