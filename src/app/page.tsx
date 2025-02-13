import { Dialog, Header, Main } from '@layoutUI';
import { Button, NavigationItem } from '@sharedUI';

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
      <Dialog />
      <Main />
    </>
  );
}
