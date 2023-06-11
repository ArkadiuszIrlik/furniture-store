import { IconContext } from 'react-icons';
import { BiTrashAlt } from 'react-icons/bi';
import { Dispatch } from 'react';
import { SpinButton } from '.';

interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

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
            <img
              src={item.image}
              alt=""
              className="rounded-lg flex-auto basis-1/3 min-w-0
                     object-contain object-center h-36 bg-product"
              draggable="false"
            />
            <div className="flex flex-col flex-auto min-w-0 basis-2/3 text-left">
              <div className="flex justify-between">
                <p className="font-medium break-words min-w-0">{item.name}</p>
                <button
                  type="button"
                  aria-label={`remove ${item.name} ${item.details || ''}`}
                  onClick={() =>
                    cartDispatch({ type: 'removed', itemId: item.id })
                  }
                >
                  <IconContext.Provider
                    value={{
                      size: '1.3rem',
                      className: 'text-text shrink-0',
                    }}
                  >
                    <BiTrashAlt />
                  </IconContext.Provider>
                </button>
              </div>
              {item.details && <p className="mb-2">{item.details}</p>}
              <div className="flex justify-stretch items-center gap-3 mb-2">
                <label htmlFor={`quantity-cart-list-${item.id}`}>
                  Quantity
                </label>
                <SpinButton
                  labelText="Quantity"
                  inputId={`quantity-cart-list-${item.id}`}
                  inputValue={item.quantity}
                  onValueChange={(nextValue) =>
                    cartDispatch({
                      type: 'changedQuantity',
                      itemId: item.id,
                      nextQuantity: nextValue,
                    })
                  }
                  className="min-w-[7rem] md:min-w-[5rem]"
                />
              </div>
              <p className="font-medium">
                $
                {item.priceUsd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ShoppingCartList;
