import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Litt Heating and Air | HVAC Services in Modesto, CA',
    template: '%s | Litt Heating and Air',
  },
  description:
    'Licensed HVAC contractor in Modesto, CA. AC repair, heating, furnace installation, duct cleaning, and 24/7 emergency services. Home energy auditing recognized by the US Dept. of Energy. Call (209) 380-3032.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Litt Heating and Air',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
