// import { AddInfluencerPage } from '@/pages/Home/AddInfluencer/AddInfluencerPage';
// import { OnBoardingPage } from '@/pages/Home/Onboarding/OnBoardingPage';
// import { TiktokProfilePage } from '@/pages/Home/Tiktok/TiktokProfilePage';
// import { YoutubeProfilePage } from '@/pages/Home/YouTube/YoutubeProfilePage';
// import { Random } from '@/pages/Random';
import { ROUTES } from '@/shared/constants/ROUTES';

import { RouteObject } from 'react-router-dom';
import { Route } from './components/Route';
import { AuthPage } from '@/pages/auth';
import { LoginPage } from '@/pages/auth/Login';
import { RegisterPage } from '@/pages/auth/Register';

export const config: RouteObject[] = [
  {
    path: ROUTES.AUTH.PATH,
    element: (
      <Route layout="auth">
        <AuthPage />
      </Route>
    ),
    children: [
      {
        path: ROUTES.AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.AUTH.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },

  // LOGIN USERS
  // {
  //   path: ROUTES.ONBOARDING.HOME,
  //   element: (
  //     <Route layout="dashboard" isPrivate>
  //       <HomePage />
  //     </Route>
  //   ),
  // },

  // LOGIN USERS
  // {
  //   path: ROUTES.ONBOARDING.HOME,
  //   element: (
  //     <Route layout="dashboard" isPrivate>
  //       <HomePage />
  //     </Route>
  //   ),
  // },

  // {
  //   path: `${ROUTES.PLATFORM.YOUTUBE}/:username`,
  //   element: (
  //     <Route layout="dashboard" isPrivate>
  //       <YoutubeProfilePage />
  //     </Route>
  //   ),
  // },

  // {
  //   path: `${ROUTES.PLATFORM.TIKTOK}/:username`,
  //   element: (
  //     <Route layout="dashboard" isPrivate>
  //       <TiktokProfilePage />
  //     </Route>
  //   ),
  // },
];
