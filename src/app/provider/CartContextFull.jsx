'use client';

import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exists = cartItems.some((p) => p.id === item.id);

    if (exists) {
      toast.error(`${item.dish_name} is already in the cart`);
      return;
    }

    setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    toast.success(`${item.dish_name} added successfully`);
  };

  const increaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    const existing = cartItems.find((item) => item.id === productId);

    if (!existing) return;

    if (existing.quantity === 1) {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
      toast.info(`${existing.dish_name} removed successfully`);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (id) => {
    const removedItem = cartItems.find((item) => item.id === id);

    setCartItems((prev) => prev.filter((item) => item.id !== id));

    toast.info(`${removedItem?.dish_name || 'Item'} removed successfully`);
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error('useCart must be used inside CartProvider');
  }

  return ctx;
}
