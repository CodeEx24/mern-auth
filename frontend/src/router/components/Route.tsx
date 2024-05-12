import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Layouts, RouteLayout } from './RouteLayout';
import { ROUTES } from '@/shared/constants/ROUTES';

interface Props {
  children: ReactNode;
  isPrivate?: boolean;
  layout?: Layouts;
}

export const Route = ({ children, layout, isPrivate = false }: Props) => {
  // const user = ls.get(COMMON.USER);
  const user = false;

  if (isPrivate === true && !user) {
    console.log('IN LOGIN');
    return <Navigate to={ROUTES.AUTH.LOGIN} />;
  }

  if (isPrivate === false && user) {
    return <Navigate to={ROUTES.AUTH.REGISTER} />;
  }

  // if (user && isPrivate === false) {
  //   return <Navigate to={ROUTES.AUTH.LOGIN} />;
  // }
  console.log('IN OUT');
  return <RouteLayout layout={layout}>{children}</RouteLayout>;
};
