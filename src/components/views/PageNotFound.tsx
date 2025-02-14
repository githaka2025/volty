'use client';
import { View } from '@layoutComponents';
import { Button, Logo } from '@sharedComponents';
import { PageNotFoundStyles } from '@viewsStyles';
import { usePathname, useRouter } from 'next/navigation';

export default function PageNotFound() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <View
      id='error-404'
      styles={PageNotFoundStyles.PageNotFound}
    >
      <Logo />
      <div className={PageNotFoundStyles.Body}>
        <h1>404 - Page Not Found</h1>
        <p className={PageNotFoundStyles.Path}>{pathname}</p>
        <p>The requested URL could not be located on this server.</p>
        <Button
          href=''
          method={() => router.back()}
          name='Back'
        />
      </div>
    </View>
  );
}
