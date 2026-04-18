import { Slide, toast } from 'react-toastify';
import { useCart } from '../provider/CartContext';

const ProceedToCheckout = () => {
  const { clearCart } = useCart();
  const handleCheckout = () => {
    clearCart();

    toast('🦄 Payment Successful!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    });
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        type='button'
        className='mt-6 w-full rounded-full bg-[#C8A96B] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]'
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProceedToCheckout;
