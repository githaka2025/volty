import { Header, Main } from '@layoutComponents';
import { Button, NavigationItem } from '@sharedComponents';

export default function Landing() {
  return (
    <>
      <Header>
        <NavigationItem
          href='/'
          name='Landing'
          active
        />
        <NavigationItem
          href='/docs'
          name='Docs'
        />
        <Button
          href='/authentication/login'
          name='Account'
        />
      </Header>
      <Main>
        <></>
      </Main>
    </>
  );
}
