import { Header, Main } from '@layoutComponents';
import { Button, NavigationItem } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Login() {
  return (
    <>
      <Header>
        <NavigationItem
          href='/authentication/login'
          name='Login'
          active
        />
        <NavigationItem
          href='/authentication/register'
          name='Register'
        />
        <NavigationItem
          href='/authentication/reset'
          name='Reset'
        />
        <Button
          href='/'
          name='Landing'
        />
      </Header>
      <Main>
        <Authentication type='Login' />
      </Main>
    </>
  );
}
