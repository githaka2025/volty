import { HeaderStyles } from '@layoutStyles';
import { Navigation } from '@layoutComponents';
import { Brand } from '@sharedComponents';
import { UI } from '@types';

export default function Header({ children }: UI.Layout.Header.Props) {
  return (
    <header className={[HeaderStyles.Header, 'layout'].join(' ')}>
      <Brand name='Volty' />
      <Navigation>{children}</Navigation>
    </header>
  );
}
