import { Handlers } from '@types';
import { accessPostgreSQL, validateHash } from '@utils';

export default async function loginUser({
  email,
  password,
}: Handlers.LoginFields): Promise<Handlers.Response> {
  if (!email || !password) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'loginUser',
        message: 'Email and Password are required.',
      },
    };
  }

  let client;

  try {
    client = await accessPostgreSQL.connect();
    const query = {
      name: 'loginUser',
      text: 'SELECT * FROM users WHERE email = $1',
      values: [email],
    };
    const result = await client.query(query);
    if (result.rows.length === 0) {
      return {
        success: false,
        error: {
          type: 'handlers',
          origin: 'loginUser',
          message: 'Username or Password is incorrect.',
        },
      };
    }

    const hash = result.rows[0].hash;
    const isPasswordOkay = await validateHash(password, hash);

    if (!isPasswordOkay) {
      return {
        success: false,
        error: {
          type: 'handlers',
          origin: 'loginUser',
          message: 'Username or Password is incorrect.',
        },
      };
    }
    return {
      success: true,
      data: {
        userId: result.rows[0].id,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'loginUser',
        message: 'Login failed.',
      },
    };
  } finally {
    if (client) {
      client.release();
    }
  }
}
