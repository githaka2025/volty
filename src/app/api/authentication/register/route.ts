import { Handlers } from '@types';
import { NextRequest, NextResponse } from 'next/server';
import { verifyRegister } from '@handlers';

export async function POST(request: NextRequest) {
  try {
    const { email, password, confirmPassword } = await request.json();

    const isRegisterOkay = verifyRegister({ email, password, confirmPassword });
    if (!isRegisterOkay.success) {
      return NextResponse.json(isRegisterOkay, {
        status: 400,
      });
    }
  } catch {
    return Response.json(
      {
        success: false,
        error: {
          type: 'handlers',
          origin: '/api/authentication/register',
          message:
            'An error occurred while trying to register. Please try again.',
        },
      } as Handlers.Response,
      {
        status: 500,
      }
    );
  }
  return Response.json({ success: true } as Handlers.Response, { status: 200 });
}
