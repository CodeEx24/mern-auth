import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ROUTES } from '@/shared/constants/ROUTES';

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-16 bg-secondary py-4 px-4 sm:px-12 flex justify-between items-center">
      <img
        src="/logo.jpg"
        alt="MMInfluencer"
        className="w-28 h-6 sm:w-48 sm:h-8"
      />

      {pathname === ROUTES.AUTH.LOGIN ? (
        <Button>
          <Link to={ROUTES.AUTH.REGISTER}>Sign Up</Link>
        </Button>
      ) : (
        <Button>
          <Link to={ROUTES.AUTH.LOGIN}>Log In</Link>
        </Button>
      )}
    </div>
  );
};
