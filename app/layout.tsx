import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from './registry';
import ReduxProvider from './redux-provider';

export const metadata: Metadata = {
  title: "FuFu's Portfolio",
  description: 'FuFu Wu - Frontend Engineer',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
