import { BrandStyles } from '@sharedStyles';
import { Logo } from '@sharedComponents';
import { Components } from '@types';

export default function Brand({ name }: Components.Shared.Brand.Props) {
  return (
    <div className={BrandStyles.Brand}>
      <Logo />
      <p>{name}</p>
    </div>
  );
}
