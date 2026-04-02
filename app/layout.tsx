import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velocity Car Detailing | Bozeman Mobile Car Detailing',
  description: 'Professional mobile car detailing services in the Bozeman area. We bring showroom-quality detailing right to your doorstep. Book today!',
  metadataBase: new URL('https://www.velocitydetailingmt.com'),
  keywords: ['car detailing', 'mobile detailing', 'Bozeman', 'ceramic coating', 'auto detailing'],
  authors: [{ name: 'Velocity Car Detailing' }],
  openGraph: {
    siteName: 'Velocity Car Detailing',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://www.velocitydetailingmt.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
