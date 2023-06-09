import { useState, useEffect, forwardRef } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { bed1 } from '../assets';
import { SpinButton, PrimaryButton } from '.';

const ShoppingCartModal = forwardRef(function ShoppingCartModal({}, ref) {
  const [cart, setCart] = useState();

  useEffect(() => {
    const handleStorage = () => {
      if (!localStorage.getItem('cart')) {
        return;
      }
      setCart(JSON.parse(localStorage.getItem('cart')));
    };
    handleStorage();
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
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
        className="flex flex-col gap-5 py-4  overflow-y-auto scrollbar
            scrollbar-thumb-primary-700 scrollbar-track-primary-300
           scrollbar-thumb-rounded-lg pr-2"
        style={{ '--scrollbar-width': '8px' }}
      >
        {cart ? (
          Object.values(cart).map((product, index) => {
            return (
              <div className="flex items-center gap-4 font-dm-sans" key={index}>
                <img
                  src={bed1}
                  alt=""
                  className="rounded-lg flex-auto basis-1/3 min-w-0
                     object-contain object-center h-36 bg-product"
                  draggable="false"
                />
                <div className="flex flex-col flex-auto min-w-0 basis-2/3 text-left">
                  <div className="flex justify-between">
                    <p className="font-medium break-words min-w-0">
                      Pillow Stuff
                    </p>
                    <IconContext.Provider
                      value={{
                        size: '1.3rem',
                        className: 'text-text shrink-0',
                      }}
                    >
                      <BiTrashAlt />
                    </IconContext.Provider>
                  </div>
                  <p className="mb-2">Emerald Velvet / Cal King</p>
                  <div className="flex justify-stretch items-center gap-3 mb-2">
                    <label htmlFor="product-quantity-selector-cart-modal">
                      Quantity
                    </label>
                    <SpinButton
                      labelText="Quantity"
                      inputId="product-quantity-selector-cart-modal"
                      inputValue={1}
                      onValueChange={() => {}}
                      className="min-w-[7rem] md:min-w-[5rem]"
                    />
                  </div>
                  <p className="font-medium">$1,249</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="font-open-sans text-center">
            There are no items in your cart.
          </p>
        )}
      </div>
      <div
        className="pt-2 pb-4 border-t-[1px]
           border-t-primary-300"
      >
        <div className="flex justify-center gap-36 font-dm-sans font-medium mb-3">
          <p>SUBTOTAL:</p>
          <p>$1,249</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2 min-w-[10rem]">
            <PrimaryButton isFilled="false">VIEW CART</PrimaryButton>
            <PrimaryButton>PROCEED TO CHECKOUT</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ShoppingCartModal;
