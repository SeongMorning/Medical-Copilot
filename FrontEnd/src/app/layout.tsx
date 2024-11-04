import ClientLayout from '@/redux/ClientLayout';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import '../style/globals.scss';

export const metadata: Metadata = {
  title: 'NEWMES',
  description: 'MEDICAL COPILOT',
  themeColor: '#8936FF',
  manifest: '/manifest.json',
};

const myFont = localFont({
  src: [
    {
      path: '../style/Paperlogy-4Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../style/Paperlogy-7Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../style/Paperlogy-9Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
