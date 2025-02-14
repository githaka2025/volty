import { ContainerStyles } from '@layoutStyles';
import { Components } from '@types';

export default function Container({
  children,
}: Components.Layout.Container.Props) {
  return (
    <section
      id='container'
      className={ContainerStyles.Container}
    >
      {children}
    </section>
  );
}
