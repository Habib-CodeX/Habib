import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '../components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Habib | Portfolio',
  description: 'Full-Stack AI Engineer & Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#03050c]">
      <body className={`${inter.className} bg-[#03050c] text-white antialiased selection:bg-indigo-500 selection:text-white`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}