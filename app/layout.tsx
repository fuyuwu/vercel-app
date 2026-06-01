import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from './registry';
import ReduxProvider from './redux-provider';

export const metadata: Metadata = {
  title: "FuFu's Blog",
  description: 'FuFu Wu - Front-end Engineer',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
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
