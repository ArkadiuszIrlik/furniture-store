'use client';

import { useReducer, useEffect } from 'react';
import { cartReducer } from 'reducers';
import { createContext } from 'react';
import { CartItem, CartAction } from 'reducers/cartReducer';

export const CartContext = createContext<{
  cart: CartItem[];
  cartDispatch: React.Dispatch<CartAction>;
}>({ cart: [], cartDispatch: () => void '' });

function CartProvider({ children }: { children: React.ReactNode }) {
  let cart: CartItem[] = [];
  let cartDispatch: React.Dispatch<CartAction> = () => void '';
  if (typeof window !== 'undefined') {
    [cart, cartDispatch] = useReducer(
      cartReducer,
      localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart') ?? '')
        : []
    );
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  }

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
