import { LogoStyles } from '@sharedStyles';
import { Icon } from '@sharedUI';

export default function Logo() {
  return (
    <Icon
      name='logo.svg'
      alt="Volty's logo."
      width={32}
      height={32}
      styles={LogoStyles.Logo}
    />
  );
}
