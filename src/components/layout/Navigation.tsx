'use client';
import { useToggle } from '@hooks';
import { NavigationStyles } from '@layoutStyles';
import { Icon } from '@sharedComponents';
import { Components } from '@types';

export default function Navigation({
  children,
}: Components.Layout.Navigation.Props) {
  const { state, toggleState } = useToggle();
  return (
    <nav className={NavigationStyles.Navigation}>
      <div className={NavigationStyles.Large}>{children}</div>
      <div className={NavigationStyles.Small}>
        <div
          className={NavigationStyles.Head}
          onClick={toggleState}
        >
          <Icon
            name={state ? 'cancel.svg' : 'menu.svg'}
            alt='Menu icon.'
            width={24}
            height={12}
          />
        </div>
        {state ? (
          <div className={NavigationStyles.Body}>{children}</div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
