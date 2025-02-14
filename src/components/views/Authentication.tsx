import { View } from '@layoutComponents';
import { Form, Input, Logo } from '@sharedComponents';
import { Components } from '@types';
import { AuthenticationStyles } from '@viewsStyles';

export default function Authentication({
  type,
}: Components.Views.Authentication.Props) {
  return (
    <View
      id={type}
      styles={AuthenticationStyles.Authentication}
    >
      <Logo />

      {/* Login */}
      {type === 'Login' && (
        <Form>
          <Input
            type='email'
            id='email'
            label='Email'
            placeholder='your@email.com'
          />
          <Input
            type='password'
            id='password'
            label='Password'
            placeholder='********'
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
          />
          <Input
            type='password'
            id='password'
            label='Password'
            placeholder='********'
          />
          <Input
            type='password'
            id='confirmPassword'
            label='Confirm Password'
            placeholder='********'
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
