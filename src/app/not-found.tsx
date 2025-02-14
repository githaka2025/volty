import { Header, Main } from '@layoutComponents';
import { Button, NavigationItem } from '@sharedComponents';
import { PageNotFound } from '@viewsComponents';

export default function NotFound() {
  return (
    <>
      <Header>
        <NavigationItem
          href='/'
          name='404'
          active
        />
        <NavigationItem
          href='/docs'
          name='Docs'
        />
        <Button
          href='/'
          name='Landing'
        />
      </Header>
      <Main>
        <PageNotFound />
      </Main>
    </>
  );
}
