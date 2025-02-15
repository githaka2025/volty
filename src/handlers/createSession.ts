import { Handlers } from '@types';
import { accessPostgreSQL } from '@utils';

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
    await client.query('BEGIN');

    const checkQuery = {
      text: 'SELECT ID FROM SESSIONS WHERE USER_ID = $1',
      values: [userId],
    };
    const existingSession = await client.query(checkQuery);

    if (existingSession.rows.length > 0) {
      const deleteQuery = {
        text: 'DELETE FROM SESSIONS WHERE USER_ID = $1',
        values: [userId],
      };
      await client.query(deleteQuery);
    }

    const insertQuery = {
      name: 'createSession',
      text: 'INSERT INTO SESSIONS (USER_ID) VALUES ($1) RETURNING *',
      values: [userId],
    };
    const result = await client.query(insertQuery);

    if (result.rows.length === 0) {
      await client.query('ROLLBACK');
      return {
        success: false,
        error: {
          type: 'handlers',
          origin: 'createSession',
          message: 'Session creation failed.',
        },
      };
    }

    await client.query('COMMIT');

    return {
      success: true,
      data: {
        sessionId: result.rows[0].id,
      },
    };
  } catch (error) {
    if (client) {
      await client.query('ROLLBACK');
    }
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
