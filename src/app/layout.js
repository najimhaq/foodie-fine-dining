// import Navbar from './components/NavBer';
import './globals.css';

import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from './components/NavBer';
import { CartProvider } from './provider/CartContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Foodie | Premium Restaurant',
  description: 'A premium restaurant website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body
        className='min-h-screen bg-[#0f0f0f] text-white'
        suppressHydrationWarning
      >
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
