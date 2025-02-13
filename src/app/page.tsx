import { Header, Main } from '@layoutUI';
import { NavigationItem } from '@sharedUI';

export default function Landing() {
  return (
    <>
      <Header>
        <NavigationItem
          href='/'
          name='Landing'
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
