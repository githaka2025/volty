import { HeaderStyles } from '@layoutStyles';
import { Navigation } from '@layoutUI';
import { Brand } from '@sharedUI';

export default function Header() {
  return (
    <header className={[HeaderStyles.Header, 'layout'].join(' ')}>
      <Brand name='Volty' />
      <Navigation>
        <></>
      </Navigation>
    </header>
  );
}
