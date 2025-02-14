import { Header, Main } from '@layoutComponents';
import { Button, NavigationItem } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Reset() {
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
        />
        <NavigationItem
          href='/authentication/reset'
          name='Reset'
          active
        />
        <Button
          href='/'
          name='Landing'
        />
      </Header>
      <Main>
        <Authentication type='Reset' />
      </Main>
    </>
  );
}
