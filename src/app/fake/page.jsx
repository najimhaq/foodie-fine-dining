import EmptyState from '../shared/EmptyState';
import ErrorState from '../shared/ErrorState';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Fake = () => {
  const blogs = [
    {
      id: 1,
      slug: 'the-art-of-perfect-pizza',
      title: 'The Art of Perfect Pizza',
      author: 'Chef Antonio',
      date: '2026-03-15',
      excerpt:
        'Discover the secrets behind crafting the perfect pizza crust and balancing toppings for maximum flavor.',
    },
    {
      id: 2,
      slug: 'healthy-eating-with-fresh-salads',
      title: 'Healthy Eating with Fresh Salads',
      author: 'Nutritionist Kim',
      date: '2026-03-22',
      excerpt:
        'Learn how to create vibrant, nutrient-packed salads that are both satisfying and delicious.',
    },
    {
      id: 3,
      slug: 'street-food-adventures-in-seoul',
      title: 'Street Food Adventures in Seoul',
      author: 'Traveler Lee',
      date: '2026-04-01',
      excerpt:
        'A journey through Korea’s bustling street food scene, from spicy tteokbokki to crispy hotteok.',
    },
    {
      id: 4,
      slug: 'mastering-homemade-pasta',
      title: 'Mastering Homemade Pasta',
      author: 'Chef Maria',
      date: '2026-04-08',
      excerpt:
        'Step-by-step guide to making fresh pasta at home, with tips on sauces and pairings.',
    },
  ];

  if (!Array.isArray(blogs)) {
    return (
      <section className='bg-[#0f0f0f] px-4 py-16'>
        <ErrorState
          title='Invalid Blog Data'
          message='The loader did not return a valid blogs array.'
        />
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section className='bg-[#0f0f0f] px-4 py-16'>
        <EmptyState
          title='No Blogs Found'
          message='There are no trending blogs available right now.'
        />
      </section>
    );
  }

  return (
    <section className='bg-[#0f0f0f] px-4 py-40 text-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96B]'>
              Latest Stories
            </p>
            <h1 className='mt-3 text-3xl font-bold sm:text-4xl'>
              Explore Food & Lifestyle Blogs
            </h1>
            <p className='mt-3 max-w-2xl text-gray-400'>
              Fresh stories, cooking tips, and travel-inspired food journeys for
              modern readers.
            </p>
          </div>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className='group rounded-3xl border border-white/10 bg-[#161616] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:bg-[#1a1a1a]'
            >
              <div className='mb-4 flex items-center justify-between gap-3'>
                <span className='rounded-full bg-[#C8A96B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96B]'>
                  Blog
                </span>
                <span className='text-xs text-gray-500'>
                  {blog.id.toString().padStart(2, '0')}
                </span>
              </div>

              <h2 className='text-xl font-semibold leading-snug text-white transition group-hover:text-[#C8A96B]'>
                {blog.title}
              </h2>

              <p className='mt-3 line-clamp-3 text-sm leading-6 text-gray-400'>
                {blog.excerpt}
              </p>

              <div className='mt-5 space-y-3 border-t border-white/10 pt-4 text-sm text-gray-300'>
                <div className='flex items-center gap-2'>
                  <FaUser className='text-[#C8A96B]' />
                  <span>{blog.author}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FaCalendarAlt className='text-[#C8A96B]' />
                  <span>{blog.date}</span>
                </div>
              </div>

              <div className='mt-6 flex items-center justify-between'>
                <Link
                  href={`/fake/${blog.slug}`}
                  className='inline-flex items-center gap-2 text-sm font-semibold text-[#C8A96B] transition group-hover:gap-3'
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fake;
