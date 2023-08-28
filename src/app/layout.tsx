import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bar Chart',
  description: 'histogram with earnings data',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
