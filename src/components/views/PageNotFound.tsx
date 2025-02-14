import { View } from '@layoutComponents';
import { Button, Logo } from '@sharedComponents';
import { PageNotFoundStyles } from '@viewsStyles';

export default function PageNotFound() {
  return (
    <View
      id='error-404'
      styles={PageNotFoundStyles.PageNotFound}
    >
      <Logo />
      <div className={PageNotFoundStyles.Body}>
        <h1>404 - Page Not Found</h1>
        <p>The requested URL could not be located on this server.</p>
        <Button
          href=''
          name='Back'
        />
      </div>
    </View>
  );
}
