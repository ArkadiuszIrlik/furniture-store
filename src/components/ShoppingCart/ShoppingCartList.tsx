import { BiTrashAlt } from 'react-icons/bi';
import { Dispatch } from 'react';
import { SpinButton } from 'components';
import { IconProvider } from 'context';
import Image from 'next/image';
import { formatPriceDollars } from 'helpers';
import { CartItem, CartActionKind } from 'reducers/cartReducer';

function ShoppingCartList({
  cart,
  cartDispatch,
}: {
  cart: CartItem[];
  cartDispatch: Dispatch<any>;
}) {
  return (
    <div className="flex flex-col gap-5">
      {cart.map((item) => {
        return (
          <div className="flex items-center gap-4 font-dm-sans" key={item.id}>
            <Image
              src={item.image}
              alt=""
              className="h-36 min-w-0 flex-auto basis-1/3
                     rounded-lg bg-product object-contain object-center"
              draggable="false"
            />
            <div className="flex min-w-0 flex-auto basis-2/3 flex-col text-left">
              <div className="flex justify-between">
                <p className="min-w-0 break-words font-medium">{item.name}</p>
                <button
                  type="button"
                  aria-label={`remove ${item.name} ${item.details || ''}`}
                  onClick={() =>
                    cartDispatch({ type: 'removed', itemId: item.id })
                  }
                >
                  <IconProvider
                    value={{
                      size: '1.3rem',
                      className: 'text-text shrink-0',
                    }}
                  >
                    <BiTrashAlt />
                  </IconProvider>
                </button>
              </div>
              {item.details && <p className="mb-2">{item.details}</p>}
              <div className="mb-2 flex items-center justify-stretch gap-3">
                <label htmlFor={`quantity-cart-list-${item.id}`}>
                  Quantity
                </label>
                <SpinButton
                  labelText="Quantity"
                  inputId={`quantity-cart-list-${item.id}`}
                  inputValue={item.quantity}
                  onValueChange={(nextValue) =>
                    cartDispatch({
                      type: CartActionKind.CHANGED_QUANTITY,
                      itemId: item.id,
                      nextQuantity: nextValue,
                    })
                  }
                  className="min-w-[7rem] md:min-w-[5rem]"
                />
              </div>
              <p className="font-medium">{formatPriceDollars(item.priceUsd)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ShoppingCartList;
