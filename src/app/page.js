import { SiIfood } from 'react-icons/si';
import Navbar from '../app/components/NavBer';
import {
  FaArrowRight,
  FaClock,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaUtensils,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const foods = [
    {
      id: 1,
      name: 'Truffle Pizza',
      desc: 'Wood-fired crust with mozzarella, herbs, and black truffle oil.',
      price: '$18',
      tag: 'Chef Choice',
    },
    {
      id: 2,
      name: 'Signature Burger',
      desc: 'Juicy grilled beef patty with cheddar, caramelized onion, and house sauce.',
      price: '$14',
      tag: 'Best Seller',
    },
    {
      id: 3,
      name: 'Ocean Sushi',
      desc: 'Fresh premium rolls prepared daily with selected seafood.',
      price: '$22',
      tag: 'Fresh Daily',
    },
    {
      id: 4,
      name: 'Creamy Pasta',
      desc: 'Italian-style pasta tossed in a rich parmesan cream sauce.',
      price: '$16',
      tag: 'Classic Taste',
    },
  ];

  const features = [
    {
      id: 1,
      icon: <FaUtensils />,
      title: 'Curated Menu',
      desc: 'Handcrafted dishes inspired by global flavors and refined presentation.',
    },
    {
      id: 2,
      icon: <FaLeaf />,
      title: 'Fresh Ingredients',
      desc: 'We use seasonal ingredients to bring natural taste and quality to every plate.',
    },
    {
      id: 3,
      icon: <FaClock />,
      title: 'Fast Reservation',
      desc: 'Book your dining experience easily and enjoy premium service on arrival.',
    },
  ];

  return (
    <>
      <Navbar />

      <main className='bg-[#0f0f0f] text-white'>
        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-[#111111] via-[#161616] to-[#0f0f0f]' />
          <div className='absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C8A96B]/10 blur-3xl' />

          <div className='relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-36 md:grid-cols-2 lg:px-8'>
            <div>
              <span className='inline-block rounded-full border border-[#C8A96B]/30 bg-[#C8A96B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A96B]'>
                <div className='flex justify-center items-center gap-1.5'>
                  <SiIfood className='size-4 animate-pulse' />
                  Premium Dining Experience
                </div>
              </span>

              <h1 className='mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl'>
                Taste the art of
                <span className='block text-[#C8A96B]'>fine dining</span>
              </h1>

              <p className='mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg'>
                Discover elegant flavors, signature dishes, and a warm
                atmosphere crafted for unforgettable dining moments.
              </p>

              <div className='mt-8 flex flex-wrap gap-4'>
                <Link
                  href='/reservation'
                  className='rounded-full bg-[#C8A96B] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105'
                >
                  Book a Table
                </Link>

                <Link
                  href='/menu'
                  className='rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10'
                >
                  Explore Menu
                </Link>
              </div>

              <div className='mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-300'>
                <div className='flex items-center gap-2'>
                  <FaStar className='text-[#C8A96B]' />
                  <span>4.9 Rated Experience</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FaMapMarkerAlt className='text-[#C8A96B]' />
                  <span>Downtown Fine Dining</span>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm'>
                <div className='rounded-[1.5rem] bg-gradient-to-br from-[#1b1b1b] to-[#111111] p-6'>
                  <div className='grid gap-4'>
                    <div className='rounded-3xl border border-[#C8A96B]/20 bg-[#151515] p-6'>
                      <p className='text-sm uppercase tracking-[0.25em] text-[#C8A96B]'>
                        Today&apos;s Special
                      </p>
                      <h2 className='mt-3 text-2xl font-semibold text-white'>
                        Grilled Salmon Plate
                      </h2>
                      <p className='mt-3 text-gray-400'>
                        Served with roasted vegetables, lemon butter sauce, and
                        chef’s garnish.
                      </p>
                      <div className='mt-6 flex items-center justify-between'>
                        <span className='text-2xl font-bold text-[#C8A96B]'>
                          $26
                        </span>
                        <button className='rounded-full bg-[#C8A96B] p-3 text-black transition hover:rotate-[-8deg]'>
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <div className='rounded-2xl border border-white/10 bg-white/5 p-5'>
                        <p className='text-3xl font-bold text-white'>12K+</p>
                        <p className='mt-2 text-sm text-gray-400'>
                          Happy customers
                        </p>
                      </div>
                      <div className='rounded-2xl border border-white/10 bg-white/5 p-5'>
                        <p className='text-3xl font-bold text-white'>50+</p>
                        <p className='mt-2 text-sm text-gray-400'>
                          Signature dishes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute -bottom-6 -left-6 hidden rounded-2xl border border-[#C8A96B]/20 bg-[#1a1a1a] px-5 py-4 shadow-xl md:block'>
                <p className='text-sm text-gray-400'>Open Daily</p>
                <p className='mt-1 font-semibold text-white'>
                  10:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-6 py-20 lg:px-8'>
          <div className='mb-12 max-w-2xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96B]'>
              Why choose us
            </p>
            <h2 className='mt-4 text-3xl font-bold text-white sm:text-4xl'>
              Crafted for memorable dining
            </h2>
          </div>

          <div className='grid gap-6 md:grid-cols-3'>
            {features.map((feature) => (
              <div
                key={feature.id}
                className='rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:bg-white/10'
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A96B] text-lg text-black'>
                  {feature.icon}
                </div>
                <h3 className='mt-5 text-xl font-semibold text-white'>
                  {feature.title}
                </h3>
                <p className='mt-3 leading-7 text-gray-400'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-6 py-20 lg:px-8'>
          <div className='mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96B]'>
                Signature dishes
              </p>
              <h2 className='mt-4 text-3xl font-bold text-white sm:text-4xl'>
                Taste our customer favorites
              </h2>
            </div>
            <button className='w-fit rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10'>
              View Full Menu
            </button>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
            {foods.map((food) => (
              <div
                key={food.id}
                className='group rounded-3xl border border-white/10 bg-[#161616] p-5 transition duration-300 hover:-translate-y-2 hover:border-[#C8A96B]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
              >
                <div className='flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-[#222222] to-[#111111] text-5xl'>
                  🍽️
                </div>

                <div className='mt-5 flex items-center justify-between gap-3'>
                  <h3 className='text-xl font-semibold text-white'>
                    {food.name}
                  </h3>
                  <span className='rounded-full bg-[#C8A96B]/10 px-3 py-1 text-xs font-semibold text-[#C8A96B]'>
                    {food.tag}
                  </span>
                </div>

                <p className='mt-3 text-sm leading-6 text-gray-400'>
                  {food.desc}
                </p>

                <div className='mt-5 flex items-center justify-between'>
                  <span className='text-xl font-bold text-[#C8A96B]'>
                    {food.price}
                  </span>
                  <button className='rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-[#C8A96B] hover:text-black'>
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-6 py-20 lg:px-8'>
          <div className='rounded-[2rem] border border-[#C8A96B]/20 bg-gradient-to-r from-[#151515] to-[#101010] px-6 py-10 md:px-10 md:py-14'>
            <div className='grid gap-8 md:grid-cols-2 md:items-center'>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96B]'>
                  Reservation
                </p>
                <h2 className='mt-4 text-3xl font-bold text-white sm:text-4xl'>
                  Reserve your table for an unforgettable evening
                </h2>
                <p className='mt-4 max-w-xl leading-7 text-gray-400'>
                  Enjoy premium ambiance, exceptional dishes, and warm
                  hospitality tailored for your perfect dining experience.
                </p>
              </div>

              <div className='flex flex-wrap gap-4 md:justify-end'>
                <button className='rounded-full bg-[#C8A96B] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105'>
                  Book Now
                </button>
                <button className='rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className='border-t border-white/10 bg-[#0b0b0b]'>
          <div className='mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-8'>
            <div>
              <h3 className='text-2xl font-bold text-white'>Foodie</h3>
              <p className='mt-4 max-w-sm leading-7 text-gray-400'>
                A premium restaurant experience where flavor, comfort, and style
                come together.
              </p>
            </div>

            <div>
              <h4 className='text-lg font-semibold text-white'>Contact</h4>
              <div className='mt-4 space-y-3 text-gray-400'>
                <p className='flex items-center gap-3'>
                  <FaMapMarkerAlt className='text-[#C8A96B]' />
                  123 Gourmet Street, Downtown
                </p>
                <p className='flex items-center gap-3'>
                  <FaPhoneAlt className='text-[#C8A96B]' />
                  +1 234 567 890
                </p>
              </div>
            </div>

            <div>
              <h4 className='text-lg font-semibold text-white'>
                Opening Hours
              </h4>
              <div className='mt-4 space-y-2 text-gray-400'>
                <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
                <p>Sat - Sun: 11:00 AM - 11:30 PM</p>
              </div>
            </div>
          </div>

          <div className='border-t border-white/10 py-5 text-center text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} Foodie. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
