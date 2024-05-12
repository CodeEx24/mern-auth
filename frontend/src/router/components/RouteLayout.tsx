import { AuthLayout } from '@/layouts/Auth';
import { HomeLayout } from '@/layouts/Home';
import { ReactNode } from 'react';

export type Layouts = 'dashboard' | 'auth';

interface Props {
  children: ReactNode;
  layout?: Layouts;
}

export const RouteLayout = ({ children, layout = 'auth' }: Props) => {
  switch (layout) {
    case 'dashboard':
      return <HomeLayout>{children}</HomeLayout>;
    case 'auth':
      return <AuthLayout>{children}</AuthLayout>;
    // case 'dashboard':
    //   return <DashboardLayout>{children}</DashboardLayout>;
    // case 'releasenotes':
    //   return <ReleaseNotesLayout>{children}</ReleaseNotesLayout>;
    default:
      return <AuthLayout>{children}</AuthLayout>;
  }
};
