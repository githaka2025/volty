import { ButtonStyles } from '@sharedStyles';
import { Components } from '@types';
import Link from 'next/link';

export default function Button({
  href,
  name,
  method,
}: Components.Shared.Button.Props) {
  return (
    <>
      {method ? (
        <div
          className={ButtonStyles.Button}
          onClick={method}
        >
          {name}
        </div>
      ) : (
        <Link
          href={href}
          className={ButtonStyles.Button}
          onClick={method}
        >
          {name}
        </Link>
      )}
    </>
  );
}
