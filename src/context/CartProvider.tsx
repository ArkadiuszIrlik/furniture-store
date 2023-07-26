'use client';

import { useReducer, useEffect } from 'react';
import { cartReducer } from 'reducers';
import { createContext } from 'react';
function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, cartDispatch] = useReducer(
    cartReducer,
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart') ?? '')
      : []
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const CartContext = createContext({ cart, cartDispatch });

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
