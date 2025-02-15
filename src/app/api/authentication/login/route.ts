import { Handlers } from '@types';
import { NextRequest, NextResponse } from 'next/server';
import { verifyLogin } from '@handlers';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const isLoginOkay = verifyLogin({ email, password });
    if (!isLoginOkay.success) {
      return NextResponse.json(isLoginOkay, {
        status: 400,
      });
    }
  } catch {
    return Response.json(
      {
        success: false,
        error: {
          type: 'handlers',
          origin: '/api/authentication/login',
          message:
            'An error occurred while trying to log in. Please try again.',
        },
      } as Handlers.Response,
      {
        status: 500,
      }
    );
  }
  return Response.json({ success: true } as Handlers.Response, { status: 200 });
}
