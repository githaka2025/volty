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
          <li>
            <ol>The page has been moved or deleted.</ol>
            <ol>The URL was entered incorrectly.</ol>
            <ol>A broken link is referencing a non-existent resource.</ol>
          </li>
        </p>
        <Button
          href=''
          name='Back'
        />
      </div>
    </View>
  );
}
