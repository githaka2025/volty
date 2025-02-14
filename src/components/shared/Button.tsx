import { ButtonStyles } from '@sharedStyles';
import { Components } from '@types';
import Link from 'next/link';

export default function Button({ href, name }: Components.Shared.Button.Props) {
  return (
    <Link
      href={href}
      className={ButtonStyles.Button}
    >
      {name}
    </Link>
  );
}
