import { forwardRef, Dispatch } from 'react';
import { PrimaryButton, ShoppingCartList } from '.';
import { calculateCartTotal } from '../helpers';

interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

const ShoppingCartModal = forwardRef(function ShoppingCartModal(
  { cart, cartDispatch }: { cart: CartItem[]; cartDispatch: Dispatch<any> },
  ref
) {
  return (
    <div
      className="flex flex-col overflow-hidden
      absolute top-[100%] right-0
       bg-white border-2 border-primary-700 rounded-lg 
       px-3 min-w-[23rem] max-w-md max-h-[35rem] z-30 
       animate-[slide-up-fade-in_0.4s_ease-out] forwards"
      ref={ref}
    >
      <h3
        className="font-dm-sans text-2xl border-b-[1px]
         border-b-primary-300 py-2"
      >
        SHOPPING CART
      </h3>
      <div
        className="py-4 overflow-y-auto scrollbar
            scrollbar-thumb-primary-700 scrollbar-track-primary-300
           scrollbar-thumb-rounded-lg pr-2"
        style={{ '--scrollbar-width': '8px' }}
      >
        {cart.length !== 0 ? (
          <ShoppingCartList cart={cart} cartDispatch={cartDispatch} />
        ) : (
          <p className="font-open-sans text-center">
            There are no items in your cart.
          </p>
        )}
      </div>
      {cart.length !== 0 && (
        <div
          className="pt-2 pb-4 border-t-[1px]
           border-t-primary-300"
        >
          <div className="flex justify-center gap-36 font-dm-sans font-medium mb-3">
            <p>SUBTOTAL:</p>
            <p>
              $
              {calculateCartTotal(cart)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-2 min-w-[10rem]">
              <PrimaryButton isFilled="false">VIEW CART</PrimaryButton>
              <PrimaryButton>PROCEED TO CHECKOUT</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default ShoppingCartModal;
