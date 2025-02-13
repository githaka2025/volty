import Image from 'next/image';
import { UI } from '@types';
import { IconStyles } from '@sharedStyles';

export default function Icon({
  name,
  alt,
  width,
  height,
}: UI.Shared.IconProps) {
  return (
    <Image
      src={`/icons/dark/${name}`}
      alt={alt}
      width={width}
      height={height}
      className={IconStyles.Icon}
    />
  );
}
