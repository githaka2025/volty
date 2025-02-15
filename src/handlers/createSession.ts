import { Handlers } from '@types';
import { accessPostgreSQL, validateHash } from '@utils';

export default async function createSession(
  userId: string
): Promise<Handlers.Response> {
  if (!userId) {
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'createSession',
        message: 'User ID is required.',
      },
    };
  }

  let client;

  try {
    client = await accessPostgreSQL.connect();
    const query = {
      name: 'createSession',
      text: 'INSERT INTO SESSIONS (USER_ID) VALUES ($1) RETURNING *',
      values: [userId],
    };
    const result = await client.query(query);
    if (result.rows.length === 0) {
      return {
        success: false,
        error: {
          type: 'handlers',
          origin: 'createSession',
          message: 'Session creation failed.',
        },
      };
    }

    return {
      success: true,
      data: {
        sessionId: result.rows[0].id,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: {
        type: 'handlers',
        origin: 'createSession',
        message: 'Create session failed.',
      },
    };
  } finally {
    if (client) {
      client.release();
    }
  }
}
