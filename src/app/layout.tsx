import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Anton, League_Spartan } from 'next/font/google';

const poppins = Poppins({
  weight: ['200'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
});

const leaguespartan = League_Spartan({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-leaguespartan',
});

export const metadata: Metadata = {
  title: 'theBOAT',
  description: 'Complete web development solutions with SEO, marketing, branding, and creative services',
  icons: {
    icon: '/docklarlogo.png',
    shortcut: '/docklar-fav.png',
    apple: '/docklar-fav.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${anton.variable} ${leaguespartan.variable}`}>
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
