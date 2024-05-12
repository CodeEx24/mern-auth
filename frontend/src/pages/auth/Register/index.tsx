import { lazy, Suspense } from 'react';

const Register = lazy(() => import('./RegisterContainer'));

export const RegisterPage = () => {
  return (
    <Suspense>
      <Register />
    </Suspense>
  );
};
