import { Header, Main } from '@layoutComponents';
import { Button, NavigationItem } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Register() {
  return (
    <>
      <Header>
        <NavigationItem
          href='/authentication/login'
          name='Login'
        />
        <NavigationItem
          href='/authentication/register'
          name='Register'
          active
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
        <Authentication type='Register' />
      </Main>
    </>
  );
}
