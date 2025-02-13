import '@/styles/globals.css';
import { workSans } from '@dynamicFonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
