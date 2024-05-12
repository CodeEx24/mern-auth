import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { loginSchema } from '@/shared/schema';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/ROUTES';
import { z } from 'zod';

type SignUpSchemaType = z.infer<typeof loginSchema>;

const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Card className="w-[350px] sm:w-[400px]">
      <CardHeader className="text-center space-y-2.5">
        <CardTitle className="font-bold">Log in</CardTitle>
        <CardDescription className="text-primary text-base">
          Enter your email below to log in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-2.5">
            <Input id="email" placeholder="Email" {...register('email')} />
            {errors.email && (
              <span className="text-sm text-red-500 font-medium">
                {errors.email.message}
              </span>
            )}
            <Input
              id="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <span className="text-sm text-red-500 font-medium">
                {errors.password.message}
              </span>
            )}

            <Button type="submit" size="full">
              Submit
            </Button>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-400"> </div>
              <span className="text-xs flex-shrink mx-4 text-gray-400">OR</span>
              <div className="flex-grow border-t border-gray-400"> </div>
            </div>
            <Button
              type="button"
              variant="outline"
              className="space-x-2"
              // onClick={() => onSignUpWithGoogle()}
            >
              <img src="/google.png" alt="Google Logo" className="h-4 w-4" />
              <span>Continue with Google</span>
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-6">
        <p className="text-xs text-center">
          By signing up, you agree to the{' '}
          <span className="font-bold">Terms of Service</span> and
          <span className="font-bold"> Privacy Policy</span>
        </p>

        <Button variant="outline" size="full" className="space-x-2 shadow-sm">
          <Link to={ROUTES.AUTH.LOGIN}>Already have an account? Login</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginView;
