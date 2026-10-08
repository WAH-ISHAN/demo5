import type { Metadata } from 'next';
import './globals.css';

export const viewport = { width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  title: 'Aurelia Collection — Private journeys, beautifully considered',
  description: 'A premium hospitality website template crafted by Orean Software Solutions.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
