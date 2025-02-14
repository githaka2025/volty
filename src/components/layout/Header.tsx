import { HeaderStyles } from '@layoutStyles';
import { Navigation } from '@layoutComponents';
import { Brand } from '@sharedComponents';
import { Components } from '@types';

export default function Header({ children }: Components.Layout.Header.Props) {
  return (
    <header className={[HeaderStyles.Header, 'layout'].join(' ')}>
      <Brand name='Volty' />
      <Navigation>{children}</Navigation>
    </header>
  );
}
