import { forwardRef, Dispatch } from 'react';
import { PrimaryButton, ShoppingCartList } from 'components';
import { calculateCartTotal } from 'helpers';
import { CartItem } from 'reducers/cartReducer';

const ShoppingCartModal = forwardRef<
  HTMLInputElement,
  { cart: CartItem[]; cartDispatch: Dispatch<any> }
>(function ShoppingCartModal({ cart, cartDispatch }, ref) {
  return (
    <div
      className="forwards absolute right-0
      top-[100%] z-30 flex
       max-h-[35rem] min-w-[23rem] max-w-md animate-[slide-up-fade-in_0.4s_ease-out] 
       flex-col overflow-hidden rounded-lg border-2 border-primary-700 
       bg-white px-3"
      ref={ref}
    >
      <h3
        className="border-b-[1px] border-b-primary-300 py-2
         font-dm-sans text-2xl"
      >
        SHOPPING CART
      </h3>
      <div
        className="scrollbar-narrow overflow-y-auto py-4 pr-2
            scrollbar scrollbar-track-primary-300
           scrollbar-thumb-primary-700 scrollbar-thumb-rounded-lg"
      >
        {cart.length !== 0 ? (
          <ShoppingCartList cart={cart} cartDispatch={cartDispatch} />
        ) : (
          <p className="text-center font-open-sans">
            There are no items in your cart.
          </p>
        )}
      </div>
      {cart.length !== 0 && (
        <div
          className="border-t-[1px] border-t-primary-300 pb-4
         pt-2"
        >
          <div className="mx-7 mb-3 flex justify-between gap-4 font-dm-sans font-medium">
            <p>SUBTOTAL:</p>
            <p>
              $
              {calculateCartTotal(cart)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex min-w-[10rem] flex-col gap-2">
              <PrimaryButton type="button" isFilled="false">
                VIEW CART
              </PrimaryButton>
              <PrimaryButton type="button">PROCEED TO CHECKOUT</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
export default ShoppingCartModal;
