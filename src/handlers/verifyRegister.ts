import { Handlers } from '@types';

export default function verifyRegister({
  email,
  password,
  confirmPassword,
}: Handlers.RegisterFields): Handlers.Response {
  if (!email || !password || !confirmPassword) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'verifyRegister',
        message: 'Email, Password and Confirm Password are required.',
      },
    } as Handlers.Response;
  }

  if (password.length < 8) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'verifyRegister',
        message: 'Password must be at least 8 characters long.',
      },
    } as Handlers.Response;
  }

  if (!email.endsWith('@gmail.com')) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'verifyRegister',
        message: 'Only Gmail email addresses are allowed.',
      },
    } as Handlers.Response;
  }

  if (password !== confirmPassword) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'verifyRegister',
        message: 'Password and Confirm Password must be identical.',
      },
    } as Handlers.Response;
  }

  return { success: true };
}
