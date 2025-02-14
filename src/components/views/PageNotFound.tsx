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
      <div>
        <h1>404 - Page Not Found</h1>
        <p>
          The requested URL could not be located on this server. This may be due
          to one of the following reasons:
        </p>
        <ol>
          <li>The page has been moved or deleted.</li>
          <li>The URL was entered incorrectly.</li>
          <li>A broken link is referencing a non-existent resource.</li>
        </ol>
        <Button
          href=''
          name='Back'
        />
      </div>
    </View>
  );
}
