import { NavigationItemStyles } from '@sharedStyles';
import { Components } from '@types';
import Link from 'next/link';

export default function NavigationItem({
  href,
  name,
  active,
}: Components.Shared.NavigationItem.Props) {
  return (
    <Link
      href={href}
      className={
        active
          ? NavigationItemStyles.Active
          : NavigationItemStyles.NavigationItem
      }
    >
      {name}
    </Link>
  );
}
