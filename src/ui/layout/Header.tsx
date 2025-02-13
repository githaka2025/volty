import { HeaderStyles } from '@layoutStyles';
import { Brand } from '@sharedUI';

export default function Header() {
  return (
    <header className={[HeaderStyles.Header, 'layout'].join(' ')}>
      <Brand name='Volty' />
    </header>
  );
}
