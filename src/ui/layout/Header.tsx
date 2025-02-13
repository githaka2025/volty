import { HeaderStyles } from '@layoutStyles';

export default function Header() {
  return (
    <header className={[HeaderStyles.Header, 'layout'].join(' ')}></header>
  );
}
