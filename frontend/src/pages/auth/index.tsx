import { lazy, Suspense } from 'react';

const Auth = lazy(() => import('./AuthContainer'));

export const AuthPage = () => {
  return (
    <Suspense>
      <Auth />
    </Suspense>
  );
};
