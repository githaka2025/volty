import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyLogin, verifyRegister } from '@middleware';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/api/authentication/login') {
    const isLoginOk = await verifyLogin(request);
    if (isLoginOk) {
      return isLoginOk;
    }
  }

  if (pathname === '/api/authentication/register') {
    const isRegistrationOk = await verifyRegister(request);
    if (isRegistrationOk) {
      return isRegistrationOk;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/authentication/login', '/api/authentication/register'],
};
