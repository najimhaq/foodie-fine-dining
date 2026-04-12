'use client';

import { useCart } from '../provider/page';

export default function AddToCartButton({ item }) {
  const { cartItems, addToCart } = useCart();

  const isAdded = cartItems.some((cartItem) => cartItem.id === item.id);

  return (
    <button
      type='button'
      onClick={() => addToCart(item)}
      disabled={isAdded}
      className={`rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
        isAdded
          ? 'cursor-not-allowed bg-transparent text-[#C8A96B] border border-[#C8A96B] opacity-70'
          : 'bg-[#C8A96B] text-black hover:scale-105'
      }`}
    >
      {isAdded ? 'Added' : 'Add To Cart'}
    </button>
  );
}
