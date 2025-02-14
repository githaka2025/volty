import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyLogin } from '@middleware';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/api/authentication/login') {
    const loginValidationResponse = await verifyLogin(request);
    if (loginValidationResponse) {
      return loginValidationResponse;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/authentication/login'],
};
