import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./LoginContainer'));

export const LoginPage = () => {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
};
