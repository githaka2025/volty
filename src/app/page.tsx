import { Header, Main } from '@layoutUI';
import { NavigationItem } from '@sharedUI';

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
      </Header>
      <Main />
    </>
  );
}
