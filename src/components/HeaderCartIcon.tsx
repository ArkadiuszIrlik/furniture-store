'use client';

import { FiShoppingCart } from 'react-icons/fi';
import React, { useState, useRef, useContext } from 'react';
import { CartContext } from 'context/CartProvider';
import { IconContext } from 'react-icons';
import { ShoppingCartModal } from 'components';
import styleVars from 'styleVars';
import { useClientCheck } from 'hooks';

function HeaderCartIcon() {
  const { cart, cartDispatch } = useContext(CartContext);
  const [isCartModalShown, setIsCartModalShown] = useState(false);
  const cartModalRef = useRef<HTMLInputElement | null>(null);
  const totalQuantity = cart.reduce((total, next) => total + next.quantity, 0);

  const isClient = useClientCheck();

  function showCartModal() {
    setIsCartModalShown(true);
  }
  async function hideCartModal() {
    if (!cartModalRef.current) {
      return;
    }
    cartModalRef.current.classList.remove(
      'animate-[slide-up-fade-in_0.4s_ease-out]'
    );
    cartModalRef.current.classList.add(
      'animate-[slide-down-fade-out_0.4s_ease-out]'
    );
    async function animationEnd(): Promise<void> {
      return new Promise<void>((resolve): void => {
        if (cartModalRef.current) {
          cartModalRef.current.onanimationend = () => resolve();
        }
      });
    }
    await animationEnd();
    setIsCartModalShown(false);
  }
  return (
    <div
      className="group relative flex items-end"
      onMouseEnter={showCartModal}
      onMouseLeave={hideCartModal}
    >
      <button
        type="button"
        onClick={() => console.log(`clicked${Math.random()}`)}
      >
        <IconContext.Provider
          value={{
            style: { strokeWidth: '0.1rem', stroke: styleVars.colors.text },
            size: '1.5rem',
          }}
        >
          <FiShoppingCart />
        </IconContext.Provider>
      </button>
      {!!totalQuantity && isClient && (
        <div
          className="absolute bottom-0 right-0 flex aspect-square min-h-0 
               min-w-[1.5rem] translate-x-[40%] translate-y-[80%] items-center justify-center rounded-full bg-accents-700 p-1
               md:translate-x-[60%] md:translate-y-[60%]"
        >
          <p className="font-dm-sans text-base font-medium text-white">
            {totalQuantity}
          </p>
        </div>
      )}
      {isCartModalShown && (
        <ShoppingCartModal
          ref={cartModalRef}
          cart={cart}
          cartDispatch={cartDispatch}
        />
      )}
    </div>
  );
}

export default HeaderCartIcon;
