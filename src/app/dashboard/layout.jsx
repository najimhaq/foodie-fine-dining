import '../globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import DashboardSidebar from '../dashboard/DashboardSidebar';

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
  title: 'Foodie | Dashboard',
  description: 'A premium restaurant website dashboard built with Next.js',
};

export default function DashboardLayout({ children }) {
  return (
    <div
      className={`${inter.variable} ${playfair.variable} min-h-screen bg-[#0f0f0f] text-white`}
      suppressHydrationWarning
    >
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />

        <div className='drawer-content flex min-h-screen flex-col'>
          <div className='sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#0f0f0f]/90 px-4 py-4 backdrop-blur lg:hidden'>
            <h2 className='text-lg font-semibold text-white'>Dashboard</h2>
            <label
              htmlFor='my-drawer-3'
              className='btn drawer-button border-none bg-[#C8A96B] text-black hover:bg-[#d4b57a]'
            >
              Open drawer
            </label>
          </div>

          <main className='flex-1'>{children}</main>
        </div>

        <DashboardSidebar />
      </div>
    </div>
  );
}
