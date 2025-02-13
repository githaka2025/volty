import { NavigationStyles } from '@layoutStyles';
import { UI } from '@types';

export default function Navigation({ children }: UI.Layout.Navigation.Props) {
  return (
    <nav className={NavigationStyles.Navigation}>
      <div className={NavigationStyles.Large}>{children}</div>
      <div className={NavigationStyles.Small}>
        <div className={NavigationStyles.Head}></div>
        <div className={NavigationStyles.Body}>{children}</div>
      </div>
    </nav>
  );
}
