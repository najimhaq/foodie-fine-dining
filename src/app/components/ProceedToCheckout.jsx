import { useCart } from '../provider/page';

const ProceedToCheckout = () => {
  const { clearCart } = useCart();
  return (
    <div>
      <button
        onClick={clearCart}
        type='button'
        className='mt-6 w-full rounded-full bg-[#C8A96B] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]'
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProceedToCheckout;
