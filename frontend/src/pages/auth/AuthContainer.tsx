import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthView from './AuthView';
import { ROUTES } from '@/shared/constants/ROUTES';

const AuthContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate(ROUTES.AUTH.LOGIN);
    }
  }, []);

  return <AuthView />;
};

export default AuthContainer;
