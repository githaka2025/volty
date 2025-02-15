import { Handlers } from '@types';
import { NextRequest, NextResponse } from 'next/server';
import { createSession, loginUser, verifyLogin } from '@handlers';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const isVerifyLoginOkay = verifyLogin({ email, password });
    if (!isVerifyLoginOkay.success) {
      return NextResponse.json(isVerifyLoginOkay, {
        status: 400,
      });
    }

    const isLoginUserOkay = await loginUser({
      email,
      password,
    } as Handlers.LoginFields);
    if (!isLoginUserOkay.success) {
      return NextResponse.json(isLoginUserOkay, {
        status: 400,
      });
    }

    let userId;
    if (isLoginUserOkay.success) {
      userId = isLoginUserOkay.data?.userId;
    }

    const isCreateSessionOkay = await createSession(userId as string);
    if (!isCreateSessionOkay.success) {
      return NextResponse.json(isCreateSessionOkay, {
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
