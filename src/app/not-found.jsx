import Link from 'next/link';
import { FaArrowLeft, FaUtensils } from 'react-icons/fa';

export default function NotFound() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-40 text-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.14),transparent_35%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]' />

      <div className='relative mx-auto w-full max-w-3xl'>
        <div className='rounded-4xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-12'>
          <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C8A96B]/20 bg-[#C8A96B]/10 text-[#C8A96B]'>
            <FaUtensils className='text-3xl' />
          </div>

          <p className='mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A96B]'>
            404 Error
          </p>

          <h1 className='mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
            This page is not on the menu
          </h1>

          <p className='mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg'>
            The page you are looking for may have been moved, deleted, or never
            existed. Try going back home or explore our menu instead.
          </p>

          <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/'
              className='inline-flex items-center justify-center rounded-full bg-[#C8A96B] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105'
            >
              Go Home
            </Link>

            <Link
              href='/menu'
              className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10'
            >
              <FaArrowLeft />
              Browse Menu
            </Link>
          </div>

          <div className='mt-10 grid gap-4 text-left sm:grid-cols-3'>
            <div className='rounded-2xl border border-white/10 bg-slate-900/70 p-4'>
              <p className='text-xs uppercase tracking-[0.25em] text-[#C8A96B]'>
                Home
              </p>
              <p className='mt-2 text-sm leading-6 text-slate-400'>
                Return to the homepage and continue browsing featured content.
              </p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-slate-900/70 p-4'>
              <p className='text-xs uppercase tracking-[0.25em] text-[#C8A96B]'>
                Menu
              </p>
              <p className='mt-2 text-sm leading-6 text-slate-400'>
                Explore our dishes, prices, and signature food details.
              </p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-slate-900/70 p-4'>
              <p className='text-xs uppercase tracking-[0.25em] text-[#C8A96B]'>
                Help
              </p>
              <p className='mt-2 text-sm leading-6 text-slate-400'>
                Check the URL again if you entered the address manually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
