import { ButtonStyles } from '@sharedStyles';
import { UI } from '@types';
import Link from 'next/link';

export default function Button({ href, name }: UI.Shared.Button.Props) {
  return (
    <Link
      href={href}
      className={ButtonStyles.Button}
    >
      {name}
    </Link>
  );
}
