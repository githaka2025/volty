import { HeaderStyles } from '@layoutStyles';
import { Navigation } from '@layoutUI';
import { Brand } from '@sharedUI';
import { UI } from '@types';

export default function Header({ children }: UI.Layout.Header.Props) {
  return (
    <header className={[HeaderStyles.Header, 'layout'].join(' ')}>
      <Brand name='Volty' />
      <Navigation>{children}</Navigation>
    </header>
  );
}
