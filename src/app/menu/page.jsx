import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import EmptyState from '../shared/EmptyState';
import AddToCartButton from '../components/AddToCartButton';

const MenuPage = async () => {
  const res = await fetch(
    'https://phi-lab-server.vercel.app/api/v1/lab/foods',
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch menu data');
  }

  const result = await res.json();
  const menus = result?.data;

  if (!Array.isArray(menus)) {
    throw new Error('Invalid menu response format');
  }

  if (menus.length === 0) {
    return (
      <section className='bg-[#0f0f0f] px-4 py-40'>
        <EmptyState
          title='No Data Found'
          message='There is nothing to show right now.'
        />
      </section>
    );
  }

  return (
    <section className='bg-[#0f0f0f] px-4 py-32 text-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96B]'>
            Our Menu
          </p>
          <h1 className='mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl'>
            Explore Delicious Dishes
          </h1>
          <p className='mt-4 leading-7 text-gray-400'>
            Discover our curated menu with rich flavors, premium ingredients,
            and unforgettable taste crafted for every dining experience.
          </p>
        </div>

        <div className='grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {menus.map((item) => (
            <article
              key={item.id}
              className='group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#161616] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:bg-[#1a1a1a]'
            >
              <div className='relative overflow-hidden h-60 w-full bg-gray-100'>
                <Image
                  src={item.image_link}
                  alt={item.dish_name}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover transition duration-500 group-hover:scale-105'
                />
              </div>

              <div className='flex flex-1 flex-col p-5'>
                <div className='mb-4 flex items-center justify-between gap-3'>
                  <span className='rounded-full bg-[#C8A96B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96B]'>
                    {item.category}
                  </span>
                  <span className='text-xs text-gray-500'>
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>

                <div className='min-h-14'>
                  <h2 className='line-clamp-2 text-xl font-semibold leading-7 text-white transition group-hover:text-[#C8A96B]'>
                    {item.dish_name}
                  </h2>
                </div>

                <div className='mt-3 min-h-12'>
                  <p className='line-clamp-2 text-sm leading-6 text-gray-400'>
                    {item.alternative_names ||
                      'A flavorful signature dish made with premium ingredients.'}
                  </p>
                </div>

                <div className='mt-5 flex items-center justify-between text-sm'>
                  <span className='text-lg font-bold text-white'>
                    ${item.price}
                  </span>
                  <span className='inline-flex items-center gap-1 text-yellow-400'>
                    <FaStar className='text-xs' />
                    {item.rating}
                  </span>
                </div>

                <div className='mt-auto flex flex-wrap items-center justify-between gap-3 pt-6'>
                  <Link
                    href={`/menu/${item.id}`}
                    className='inline-flex items-center gap-2 text-sm font-semibold text-[#C8A96B] transition-all duration-300 hover:gap-3'
                  >
                    Read More
                    <FaArrowRight />
                  </Link>

                  <AddToCartButton item={item} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
