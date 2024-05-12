import { Outlet } from 'react-router-dom';

const AuthView = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthView;
