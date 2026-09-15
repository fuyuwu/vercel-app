import type { Metadata } from 'next';
import { Kiwi_Maru, Playfair_Display } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './registry';
import ReduxProvider from './redux-provider';

const kiwiMaru = Kiwi_Maru({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kiwi-maru',
});

const playfairDisplay = Playfair_Display({
  weight: '700',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vercel-app-fuyuwu.vercel.app';
const SITE_TITLE = "FuFu's Portfolio";
const SITE_DESCRIPTION = 'FuFu Wu - Frontend Engineer 個人作品集與部落格，Next.js / Vue 3 專案展示。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_TITLE,
    images: [{ url: '/avatar.jpg', width: 1080, height: 1440, alt: 'FuFu Wu' }],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/avatar.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className={`${kiwiMaru.variable} ${playfairDisplay.variable}`}>
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
