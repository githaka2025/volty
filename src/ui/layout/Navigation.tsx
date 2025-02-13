import { NavigationStyles } from '@layoutStyles';
import { Icon } from '@sharedUI';
import { UI } from '@types';

export default function Navigation({ children }: UI.Layout.Navigation.Props) {
  return (
    <nav className={NavigationStyles.Navigation}>
      <div className={NavigationStyles.Large}>{children}</div>
      <div className={NavigationStyles.Small}>
        <div className={NavigationStyles.Head}>
          <Icon
            name='cancel.svg'
            alt='Menu icon.'
            width={24}
            height={12}
          />
        </div>
        <div className={NavigationStyles.Body}>{children}</div>
      </div>
    </nav>
  );
}
