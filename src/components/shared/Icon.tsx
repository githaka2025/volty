import Image from 'next/image';
import { UI } from '@types';
import { IconStyles } from '@sharedStyles';

export default function Icon({
  name,
  alt,
  width,
  height,
  styles,
}: UI.Shared.Icon.Props) {
  return (
    <Image
      src={`/icons/dark/${name}`}
      alt={alt}
      width={width}
      height={height}
      className={[IconStyles.Icon, styles].join(' ')}
    />
  );
}
