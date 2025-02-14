'use client';
import { View } from '@layoutComponents';
import { Form, Input, Logo, Message } from '@sharedComponents';
import { Components } from '@types';
import { AuthenticationStyles } from '@viewsStyles';
import { useAuthentication } from '@hooks';

export default function Authentication({
  type,
}: Components.Views.Authentication.Props) {
  const { message, authentication, fields, setFields } =
    useAuthentication(type);
  return (
    <View
      id={type}
      styles={AuthenticationStyles.Authentication}
    >
      <Logo />

      {!message?.success && message?.error && (
        <Message
          type='Error'
          message={message.error.message}
        />
      )}

      {/* Login */}
      {type === 'Login' && (
        <Form method={authentication}>
          <Input
            type='email'
            id='email'
            label='Email'
            placeholder='your@email.com'
            method={(event) =>
              setFields({
                ...fields,
                email: (event.target as HTMLInputElement).value,
              })
            }
          />
          <Input
            type='password'
            id='password'
            label='Password'
            placeholder='********'
            method={(event) =>
              setFields({
                ...fields,
                password: (event.target as HTMLInputElement).value,
              })
            }
          />
          <Input
            type='submit'
            value={type}
          />
        </Form>
      )}

      {/* Register */}
      {type === 'Register' && (
        <Form>
          <Input
            type='email'
            id='email'
            label='Email'
            placeholder='your@email.com'
            method={(event) =>
              setFields({
                ...fields,
                email: (event.target as HTMLInputElement).value,
              })
            }
          />
          <Input
            type='password'
            id='password'
            label='Password'
            placeholder='********'
            method={(event) =>
              setFields({
                ...fields,
                password: (event.target as HTMLInputElement).value,
              })
            }
          />
          <Input
            type='password'
            id='confirmPassword'
            label='Confirm Password'
            placeholder='********'
            method={(event) =>
              setFields({
                ...fields,
                confirm_password: (event.target as HTMLInputElement).value,
              })
            }
          />
          <Input
            type='submit'
            value={type}
          />
        </Form>
      )}

      {/* Reset */}
      {type === 'Reset' && (
        <Form>
          <Input
            type='email'
            id='email'
            label='Email'
            placeholder='your@email.com'
            method={(event) =>
              setFields({
                ...fields,
                email: (event.target as HTMLInputElement).value,
              })
            }
          />
          <Input
            type='submit'
            value={type}
          />
        </Form>
      )}
    </View>
  );
}
