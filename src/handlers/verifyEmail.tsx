import { Handlers } from '@types';
import { accessPostgreSQL } from '@utils';

export default async function verifyEmail({
  email,
}: Handlers.RegisterFields): Promise<Handlers.Response> {
  if (!email) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'verifyEmail',
        message: 'Email is required.',
      },
    };
  }

  const client = await accessPostgreSQL.connect();

  try {
    const query = {
      name: 'verifyEmail',
      text: 'SELECT * FROM users WHERE email = $1',
      values: [email],
    };
    const result = await client.query(query);
    if (result.rows.length > 0) {
      return {
        success: false,
        error: {
          type: 'handlers',
          origin: 'verifyEmail',
          message: 'Email already exists.',
        },
      };
    }
    return { success: true };
  } catch {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'verifyEmail',
        message: 'Failed to verify email.',
      },
    };
  } finally {
    client.release();
  }
}
