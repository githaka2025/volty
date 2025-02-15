import { Middleware } from '@types';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function verifyLogin(request: NextRequest) {
  const body = await request.json();

  if (!body.email || !body.password) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'middleware',
        origin: 'verifyLogin',
        message: 'Email and password are required.',
      },
    } as Middleware.Response);
  }

  if (body.password.length < 8) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'middleware',
        origin: 'verifyLogin',
        message: 'Password must be atleast 8 characters long.',
      },
    } as Middleware.Response);
  }

  if (!body.email.endsWith('@gmail.com')) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'middleware',
        origin: 'verifyLogin',
        message: 'Only Gmail email addresses are allowed.',
      },
    } as Middleware.Response);
  }

  return null;
}
