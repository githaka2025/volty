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
          href='/login'
          name='Account'
        />
      </Header>
      <Main />
    </>
  );
}
