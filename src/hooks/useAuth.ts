import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Hooks } from '@types';

export default function useAuth(type: string) {
  const [message, setMessage] = useState<Hooks.Response>();
  const [endpoint, setEndpoint] = useState<string>('');
  const [redirectPath, setRedirectPath] = useState<string>('/');
  const [fields, setFields] = useState<Hooks.useAuth.Fields>({});
  const router = useRouter();

  useEffect(() => {
    switch (type) {
      case 'Login':
        setEndpoint('login');
        setFields({ email: '', password: '' });
        setRedirectPath('/dashboard');
        break;
      case 'Register':
        setEndpoint('register');
        setFields({ email: '', password: '', confirm_password: '' });
        setRedirectPath('/login');
        break;
      case 'Reset':
        setEndpoint('reset');
        setFields({ email: '' });
        setRedirectPath('/login');
        break;
      default:
        setEndpoint('');
        setFields({});
        setRedirectPath('/');
        break;
    }
  }, [type]);

  const auth = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/authentication/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      });

      const feedback = await response.json();

      if (feedback.error) {
        setMessage({
          success: false,
          error: {
            origin: 'useAuth',
            message: feedback.error.message,
          },
        });
      } else if (feedback.success) {
        router.push(redirectPath);
      }
    } catch {
      setMessage({
        success: false,
        error: {
          origin: 'useAuth',
          message: `Unable to access /api/authentication/${endpoint}.`,
        },
      });
    }
  };

  return { message, auth, fields, setFields };
}
