import { MainStyles } from '@layoutStyles';
import { Container, Footer } from '@layoutComponents';
import { Components } from '@types';

export default function Main({ children }: Components.Layout.Main.Props) {
  return (
    <main className={[MainStyles.Main, 'layout'].join(' ')}>
      <Container>{children}</Container>
      <Footer />
    </main>
  );
}
