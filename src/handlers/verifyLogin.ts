import { Handlers } from '@types';

export default function verifyLogin({
  email,
  password,
}: Handlers.LoginFields): Handlers.Response {
  if (!email || !password) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'verifyLogin',
        message: 'Email and password are required.',
      },
    };
  }

  if (password.length < 8) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'verifyLogin',
        message: 'Password must be atleast 8 characters long.',
      },
    } as Handlers.Response;
  }

  if (!email.endsWith('@gmail.com')) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'verifyLogin',
        message: 'Only Gmail email addresses are allowed.',
      },
    } as Handlers.Response;
  }

  return { success: true };
}
