import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'theDocklar',
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
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
