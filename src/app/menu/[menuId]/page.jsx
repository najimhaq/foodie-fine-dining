import Image from 'next/image';
import Link from 'next/link';

import {
  FaArrowLeft,
  FaStar,
  FaClock,
  FaUtensils,
  FaFire,
} from 'react-icons/fa';

const MenuDetails = async ({ params }) => {
  const { menuId } = await params; // {menuId} = folder er name onujai

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${menuId}`,
    {
      cache: 'no-store',
    }
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Failed to fetch menu details');
  }

  const result = await res.json();
  const menu = result?.data;

  if (!menu) {
    notFound();
  }

  return (
    <main className='min-h-screen bg-[#0f0f0f] text-white'>
      <section className='relative overflow-hidden px-4 py-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#111111] via-[#151515] to-[#0f0f0f]' />
        <div className='absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C8A96B]/10 blur-3xl' />

        <div className='relative mx-auto max-w-7xl'>
          <Link
            href='/menu'
            className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white'
          >
            <FaArrowLeft />
            Back to Menu
          </Link>

          <div className='mt-8 grid gap-10 lg:grid-cols-2 lg:items-center'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96B]'>
                Menu Details
              </p>

              <h1 className='mt-4 max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
                {menu.dish_name}
              </h1>

              <p className='mt-5 max-w-2xl text-lg leading-8 text-gray-400'>
                {menu.description ||
                  menu.short_description ||
                  'A carefully prepared dish made with premium ingredients and bold flavor balance.'}
              </p>

              <div className='mt-8 flex flex-wrap gap-3'>
                <span className='rounded-full bg-[#C8A96B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96B]'>
                  {menu.category}
                </span>

                {menu.rating && (
                  <span className='inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300'>
                    <FaStar className='text-yellow-400' />
                    {menu.rating}
                  </span>
                )}

                {menu.price && (
                  <span className='rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300'>
                    ${menu.price}
                  </span>
                )}
              </div>

              <div className='mt-8 grid gap-4 sm:grid-cols-3'>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                  <FaUtensils className='text-[#C8A96B]' />
                  <p className='mt-3 text-sm text-gray-400'>Category</p>
                  <p className='mt-1 text-lg font-semibold'>{menu.category}</p>
                </div>

                <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                  <FaClock className='text-[#C8A96B]' />
                  <p className='mt-3 text-sm text-gray-400'>Cooking Time</p>
                  <p className='mt-1 text-lg font-semibold'>
                    {menu.cooking_time || '30 min'}
                  </p>
                </div>

                <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                  <FaFire className='text-[#C8A96B]' />
                  <p className='mt-3 text-sm text-gray-400'>Spice Level</p>
                  <p className='mt-1 text-lg font-semibold'>
                    {menu.spice_level || 'Medium'}
                  </p>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='rounded-3xl border border-white/10 bg-[#161616] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)]'>
                <div className='overflow-hidden rounded-2xl'>
                  <Image
                    src={menu.image_link}
                    alt={menu.dish_name}
                    width={400}
                    height={240}
                    className='h-140 w-full object-cover'
                    priority
                  />
                </div>

                <div className='mt-4 flex items-center justify-between'>
                  <div>
                    <p className='text-sm text-gray-400'>Price</p>
                    <p className='text-2xl font-bold text-[#C8A96B]'>
                      ${menu.price}
                    </p>
                  </div>

                  <button className='rounded-full bg-[#C8A96B] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105'>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 pb-24'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_0.6fr]'>
          <article className='rounded-3xl border border-white/10 bg-[#161616] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8'>
            <h2 className='text-2xl font-bold'>About This Dish</h2>
            <p className='mt-4 leading-8 text-gray-400'>
              {menu.description ||
                'This dish is crafted with balanced seasoning, fresh ingredients, and a premium presentation that makes every bite memorable.'}
            </p>

            <div className='mt-8'>
              <h3 className='text-lg font-semibold text-white'>Ingredients</h3>
              <div className='mt-4 flex flex-wrap gap-3'>
                {(
                  menu.ingredients || [
                    'Fresh ingredients',
                    'Special spices',
                    'Signature sauce',
                  ]
                ).map((item, index) => (
                  <span
                    key={index}
                    className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className='mt-8'>
              <h3 className='text-lg font-semibold text-white'>
                Cooking Steps
              </h3>
              <div className='mt-4 space-y-4'>
                {(
                  menu.cooking_steps || [
                    'Prepare ingredients',
                    'Cook with care',
                    'Serve hot',
                  ]
                ).map((step, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300'
                  >
                    <span className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8A96B] text-sm font-bold text-black'>
                      {index + 1}
                    </span>
                    <p className='leading-7'>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className='space-y-6'>
            <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A96B]'>
                Quick Facts
              </p>
              <ul className='mt-4 space-y-3 text-sm text-gray-400'>
                <li>Category: {menu.category}</li>
                <li>Rating: {menu.rating || 'N/A'}</li>
                <li>Price: ${menu.price}</li>
              </ul>
            </div>

            <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A96B]'>
                Serving Note
              </p>
              <p className='mt-4 text-sm leading-7 text-gray-400'>
                Best enjoyed fresh and hot with a balanced side or a refreshing
                drink.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default MenuDetails;
