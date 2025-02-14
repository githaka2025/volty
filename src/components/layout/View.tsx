import { ViewStyles } from '@layoutStyles';
import { Components } from '@types';

export default function View({
  children,
  id,
  styles,
}: Components.Layout.View.Props) {
  return (
    <section
      id={id.toLowerCase()}
      className={[ViewStyles.View, styles].join(' ')}
    >
      {children}
    </section>
  );
}
