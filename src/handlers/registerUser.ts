import { Handlers } from '@types';
import { accessPostgreSQL, generateHash } from '@utils';

export default async function registerUser({
  email,
  password,
}: Handlers.RegisterFields): Promise<Handlers.Response> {
  if (!email || !password) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'registerUser',
        message: 'Email and Password are required.',
      },
    };
  }

  let client;

  const hash = await generateHash(password);

  try {
    client = await accessPostgreSQL.connect();
    const query = {
      name: 'registerUser',
      text: 'INSERT INTO USERS (email, hash) VALUES ($1, $2) RETURNING *',
      values: [email, hash],
    };
    const result = await client.query(query);
    if (result.rows.length === 0) {
      return {
        success: false,
        error: {
          type: 'handlers',
          origin: 'registerUser',
          message: 'Something went wrong during registration.',
        },
      };
    }
    return { success: true };
  } catch {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'registerUser',
        message: 'Registration failed.',
      },
    };
  } finally {
    if (client) {
      client.release();
    }
  }
}
