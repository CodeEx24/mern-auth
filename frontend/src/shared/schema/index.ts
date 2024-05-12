import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Please input your email address'),
  password: z
    .string()
    .min(1, 'Please enter your password')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[^\w\s]+/, 'Password must contain at least one special character'),
});

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(2, 'Must have at least 2 characters')
      .regex(
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores'
      ),

    password: z
      .string()
      .min(8, 'Must be at least 8 characters long')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/\d/, 'Password must contain at least one number')
      .regex(
        /[^\w\s]+/,
        'Password must contain at least one special character'
      ),
    confirmPassword: z
      .string()
      .min(8, 'Must be at least 8 characters long')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/\d/, 'Password must contain at least one number')
      .regex(
        /[^\w\s]+/,
        'Password must contain at least one special character'
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
