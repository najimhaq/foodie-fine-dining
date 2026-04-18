'use client';

import Image from 'next/image';
import Link from 'next/link';

import EmptyState from '../shared/EmptyState';

import ProceedToCheckout from '../components/ProceedToCheckout';
import { useCart } from '../provider/CartContext';
import RemoveFromCart from '../components/RemoveFromCart';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const AddToCart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <section className='min-h-screen bg-[#0f0f0f] px-4 py-32 text-white'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96B]'>
              Cart
            </p>
            <h1 className='mt-2 text-3xl font-bold sm:text-4xl'>My Cart</h1>
            <p className='mt-3 text-sm leading-6 text-gray-400'>
              Review your selected dishes before checkout.
            </p>
          </div>

          <Link
            href='/menu'
            className='inline-flex items-center justify-center rounded-full border border-[#C8A96B] px-5 py-3 text-sm font-semibold text-[#C8A96B] transition duration-300 hover:bg-[#C8A96B] hover:text-black'
          >
            Back to Menu
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className='rounded-3xl border border-white/10 bg-[#161616] p-8'>
            <EmptyState
              title='Your cart is empty'
              message='Looks like you have not added any dishes yet.'
            />
          </div>
        ) : (
          <div className='grid gap-6 lg:grid-cols-[1fr_320px]'>
            <div className='space-y-4'>
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className='flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#161616] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:flex-row sm:items-center'
                >
                  <div className='relative h-24 w-full overflow-hidden rounded-2xl sm:w-28'>
                    <Image
                      src={item.image_link}
                      alt={item.dish_name}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-cover'
                    />
                  </div>

                  <div className='flex-1'>
                    <h2 className='text-lg font-semibold text-white'>
                      {item.dish_name}
                    </h2>
                    <p className='mt-1 text-sm text-gray-400'>
                      {item.category}
                    </p>
                    <p className='mt-2 text-base font-semibold text-[#C8A96B]'>
                      ${item.price}
                    </p>
                    <p className='mt-2 text-sm text-gray-400'>
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className='flex flex-col gap-5 justify-center items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className='text-2xl text-[#C8A96B]'
                      >
                        <FaPlusCircle />
                      </button>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className='text-2xl text-[#C8A96B]'
                      >
                        <FaMinusCircle />
                      </button>
                    </div>
                    <div>
                      <RemoveFromCart itemId={item.id} />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className='h-fit rounded-3xl border border-white/10 bg-[#161616] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]'>
              <h2 className='text-xl font-semibold text-white'>
                Order Summary
              </h2>
              <div className='mt-5 flex items-center justify-between border-b border-white/10 pb-4 text-sm text-gray-300'>
                <span>Total Items</span>
                <span>
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>

              <div className='mt-4 flex items-center justify-between text-lg font-semibold text-white'>
                <span>Total Price</span>
                <span>
                  $
                  {cartItems
                    .reduce(
                      (sum, item) => sum + Number(item.price) * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              <ProceedToCheckout />
              
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddToCart;
