import { MainStyles } from '@layoutStyles';
import { Container, Footer } from '@layoutComponents';

export default function Main() {
  return (
    <main className={[MainStyles.Main, 'layout'].join(' ')}>
      <Container />
      <Footer />
    </main>
  );
}
