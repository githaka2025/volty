import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Hooks } from '@types';

export default function useAuthentication(type: string) {
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
        setFields({ email: '', password: '', confirmPassword: '' });
        setRedirectPath('/authentication/login');
        break;
      case 'Reset':
        setEndpoint('reset');
        setFields({ email: '' });
        setRedirectPath('/authentication/login');
        break;
      default:
        setEndpoint('');
        setFields({});
        setRedirectPath('/');
        break;
    }
  }, [type]);

  const authentication = async (event: React.FormEvent) => {
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
            origin: 'useAuthentication',
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
          origin: 'useAuthentication',
          message: `Unable to access /api/authentication/${endpoint}.`,
        },
      });
    }
  };

  return { message, authentication, fields, setFields };
}
