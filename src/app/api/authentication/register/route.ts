import { Handlers } from '@types';
import { NextRequest, NextResponse } from 'next/server';
import { verifyRegister, verifyEmail, registerUser } from '@handlers';

export async function POST(request: NextRequest) {
  try {
    const { email, password, confirmPassword } = await request.json();

    const isVerifyRegisterOkay = verifyRegister({
      email,
      password,
      confirmPassword,
    });
    if (!isVerifyRegisterOkay.success) {
      return NextResponse.json(isVerifyRegisterOkay, {
        status: 400,
      });
    }

    const isVerifyEmailOkay = await verifyEmail(email);
    if (!isVerifyEmailOkay.success) {
      return NextResponse.json(isVerifyEmailOkay, { status: 400 });
    }

    const isRegisterUserOkay = await registerUser({
      email,
      password,
    } as Handlers.RegisterFields);
    if (!isRegisterUserOkay.success) {
      return NextResponse.json(isRegisterUserOkay, { status: 400 });
    }
  } catch {
    return Response.json(
      {
        success: false,
        error: {
          type: 'handlers',
          origin: '/api/authentication/register',
          message:
            'An error occurred while trying to register. Please try again later.',
        },
      } as Handlers.Response,
      {
        status: 500,
      }
    );
  }
  return Response.json({ success: true } as Handlers.Response, { status: 200 });
}
