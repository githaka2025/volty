import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Middleware } from '@types';

export default async function verifyRegister(request: NextRequest) {
  const body = await request.json();

  if (!body.email || !body.password || !body.confirmPassword) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'middleware',
        origin: 'verifyRegister',
        message: 'Email, Password and Confirm Password are required.',
      },
    } as Middleware.Response);
  }

  if (body.password.length < 8) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'middleware',
        origin: 'verifyRegister',
        message: 'Password must be at least 8 characters long.',
      },
    } as Middleware.Response);
  }

  if (!body.email.endsWith('@gmail.com')) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'middleware',
        origin: 'verifyRegister',
        message: 'Only Gmail email addresses are allowed.',
      },
    } as Middleware.Response);
  }

  if (body.password !== body.confirmPassword) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'middleware',
        origin: 'verifyRegister',
        message: 'Password and Confirm Password must be identical.',
      },
    } as Middleware.Response);
  }
  return null;
}
