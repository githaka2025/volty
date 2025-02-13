import { BrandStyles } from '@sharedStyles';
import { Logo } from '@sharedUI';
import { UI } from '@types';

export default function Brand({ name }: UI.Shared.Brand.Props) {
  return (
    <div className={BrandStyles.Brand}>
      <Logo />
      <p>{name}</p>
    </div>
  );
}
