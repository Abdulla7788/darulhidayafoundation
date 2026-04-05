import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyActions from '@/components/layout/StickyActions';
import FloatingContact from '@/components/layout/FloatingContact';

/**
 * 🔒 SECURITY: Managed Google Fonts
 * Optimized for performance and strictly validated.
 */
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-heading', 
  weight: ['400', '700', '800'],
  display: 'swap' 
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-sans', 
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap' 
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-quote', 
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap' 
});

export const metadata = {
  title: 'DARULHIDAYA FOUNDATION | Secure NGO Platform',
  description: 'Production-grade Islamic charity portal with end-to-end security architecture.',
  icons: {
    icon: '/foundationlogo.jpeg',
    shortcut: '/foundationlogo.jpeg',
    apple: '/foundationlogo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${cormorant.variable}`}>
      <body className="antialiased font-sans bg-white">
        <Navbar />
        {children}
        <StickyActions />
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}