import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import BlogActions from '../../components/BlogActions';

const posts = [
  {
    slug: 'the-art-of-perfect-pizza',
    title: 'The Art of Perfect Pizza',
    author: 'Chef Antonio',
    date: '2026-03-15',
    readTime: '6 min read',
    category: 'Pizza',
    excerpt:
      'Discover the secrets behind crafting the perfect pizza crust and balancing toppings for maximum flavor.',
    content: [
      'Pizza looks simple, but balance is everything. The crust, sauce, cheese, and toppings all need the right proportions.',
      'A great crust starts with dough hydration, proper fermentation, and high heat. That combination gives you flavor and texture.',
      'Toppings should support the pizza, not overwhelm it. Use fewer ingredients, but choose better ones.',
    ],
  },
  {
    slug: 'healthy-eating-with-fresh-salads',
    title: 'Healthy Eating with Fresh Salads',
    author: 'Nutritionist Kim',
    date: '2026-03-22',
    readTime: '5 min read',
    category: 'Nutrition',
    excerpt:
      'Learn how to create vibrant, nutrient-packed salads that are both satisfying and delicious.',
    content: [
      'A salad becomes satisfying when it includes texture, protein, healthy fat, and a strong dressing.',
      'Fresh greens, roasted vegetables, seeds, cheese, and a good vinaigrette can turn a simple bowl into a full meal.',
      'The key is variety. Mix color, crunch, and brightness so each bite feels complete.',
    ],
  },
  {
    slug: 'street-food-adventures-in-seoul',
    title: 'Street Food Adventures in Seoul',
    author: 'Traveler Lee',
    date: '2026-04-01',
    readTime: '7 min read',
    category: 'Travel',
    excerpt:
      'A journey through Korea’s bustling street food scene, from spicy tteokbokki to crispy hotteok.',
    content: [
      'Seoul’s street food scene is built on speed, flavor, and comfort. Every stall has a signature story.',
      'From the heat of tteokbokki to the sweetness of hotteok, the variety is part of the experience.',
      'The best way to enjoy it is to walk slowly, try small portions, and follow the crowds.',
    ],
  },
  {
    slug: 'mastering-homemade-pasta',
    title: 'Mastering Homemade Pasta',
    author: 'Chef Maria',
    date: '2026-04-08',
    readTime: '8 min read',
    category: 'Cooking',
    excerpt:
      'Step-by-step guide to making fresh pasta at home, with tips on sauces and pairings.',
    content: [
      'Fresh pasta is all about dough feel. If it is too dry, it cracks; too wet, it becomes hard to work with.',
      'Once rolled thin, the pasta cooks fast and absorbs sauce beautifully.',
      'Pair delicate pasta with light sauces and richer pasta shapes with heavier, creamier ones.',
    ],
  },
];

export default async function FakeDetailPage({ params }) {
  const { fakeId } = await params;
  const post = posts.find((item) => item.slug === fakeId);

  if (!post) {
    return (
      <main className='min-h-screen bg-[#0f0f0f] px-4 py-32 text-white'>
        <div className='mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96B]'>
            Not Found
          </p>
          <h1 className='mt-4 text-3xl font-bold'>Blog post not found</h1>
          <p className='mt-3 text-gray-400'>
            The article you are looking for does not exist.
          </p>
          <div className='mt-8'>
            <Link
              href='/fake'
              className='inline-flex items-center gap-2 rounded-full bg-[#C8A96B] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105'
            >
              <FaArrowLeft />
              Back to Blogs
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='min-h-screen bg-[#0f0f0f] text-white'>
      <section className='relative overflow-hidden px-4 py-28'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#111111] via-[#151515] to-[#0f0f0f]' />
        <div className='absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C8A96B]/10 blur-3xl' />

        <div className='relative mx-auto max-w-5xl'>
          <Link
            href='/fake'
            className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white'
          >
            <FaArrowLeft />
            Back to Blogs
          </Link>

          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <span className='rounded-full bg-[#C8A96B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A96B]'>
              {post.category}
            </span>
            <span className='rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400'>
              Featured Story
            </span>
          </div>

          <h1 className='mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
            {post.title}
          </h1>

          <p className='mt-5 max-w-3xl text-lg leading-8 text-gray-400'>
            {post.excerpt}
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6 text-sm text-gray-300'>
            <div className='flex items-center gap-2'>
              <FaUser className='text-[#C8A96B]' />
              <span>{post.author}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaCalendarAlt className='text-[#C8A96B]' />
              <span>{post.date}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaClock className='text-[#C8A96B]' />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 pb-24'>
        <div className='mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_280px]'>
          <article className='rounded-3xl border border-white/10 bg-[#161616] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8'>
            <div className='mb-8 flex h-72 items-center justify-center rounded-3xl bg-gradient-to-br from-[#222222] to-[#111111] text-6xl'>
              🍽️
            </div>

            <div className='space-y-6 text-gray-300'>
              {post.content.map((paragraph, index) => (
                <p key={index} className='text-base leading-8'>
                  {paragraph}
                </p>
              ))}
            </div>

            <BlogActions fakeId={fakeId} />
          </article>

          <aside className='space-y-6'>
            <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A96B]'>
                About the Author
              </p>
              <h3 className='mt-4 text-2xl font-bold text-white'>
                {post.author}
              </h3>
              <p className='mt-3 text-sm leading-7 text-gray-400'>
                Passionate storyteller sharing food, travel, and cooking
                insights with a refined taste.
              </p>
            </div>

            <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A96B]'>
                Reading Notes
              </p>
              <ul className='mt-4 space-y-3 text-sm text-gray-400'>
                <li>Clean, premium blog detail layout.</li>
                <li>Strong heading hierarchy.</li>
                <li>Mobile-friendly two-column structure.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
