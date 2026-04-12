import { useCart } from '../provider/CartContext';

const RemoveFromCart = ({ itemId }) => {
  const { removeFromCart } = useCart();
  return (
    <div>
      <button
        type='button'
        onClick={() => removeFromCart(itemId)}
        className='inline-flex items-center justify-center rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-red-600'
      >
        Remove
      </button>
    </div>
  );
};

export default RemoveFromCart;
