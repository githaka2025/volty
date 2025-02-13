import { NavigationItemStyles } from '@sharedStyles';
import { UI } from '@types';
import Link from 'next/link';

export default function NavigationItem({
  href,
  name,
}: UI.Shared.NavigationItem.Props) {
  return (
    <Link
      href={href}
      className={NavigationItemStyles.NavigationItem}
    >
      {name}
    </Link>
  );
}
