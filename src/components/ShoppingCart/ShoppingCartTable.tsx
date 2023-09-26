import { Dispatch } from 'react';
import { IconContext } from 'react-icons';
import { BiTrashAlt } from 'react-icons/bi';
import { SpinButton } from 'components';

interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

function ShoppingCartTable({
  cart,
  cartDispatch,
}: {
  cart: CartItem[];
  cartDispatch: Dispatch<any>;
}) {
  return (
    <table className="w-full">
      <colgroup>
        <col className="w-1/2" />
        <col className="w-l/2" />
        <col className="w-min" />
      </colgroup>
      <thead>
        <tr className="border-b-[1px] border-b-primary-300 text-left">
          <th className="pb-1 pl-2 font-normal">ITEM</th>
          <th className="pb-1 font-normal">PRICE</th>
          <th className="pb-1 pr-2 font-normal">QUANTITY</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
          return (
            <tr
              className="border-b-[1px] border-b-primary-300 last:border-none"
              key={item.id}
            >
              <td className="py-4 pl-2">
                <div
                  className="flex min-w-max items-center gap-4 pr-4
                font-dm-sans"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-36 min-w-0
                       rounded-lg bg-product object-contain object-center"
                    draggable="false"
                  />
                  <div className="flex min-w-0 flex-auto flex-col text-left">
                    <p className="min-w-0 break-words font-medium">
                      {item.name}
                    </p>
                    {item.details && <p className="mb-2">{item.details}</p>}
                  </div>
                </div>
              </td>
              <td className="">
                <p className="font-dm-sans font-medium">
                  $
                  {item.priceUsd
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </td>
              <td className="relative w-28 pr-2">
                <SpinButton
                  labelText="Quantity"
                  inputId={`quantity-cart-table-${item.id}`}
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
                <button
                  type="button"
                  aria-label={`remove ${item.name} ${item.details || ''}`}
                  onClick={() =>
                    cartDispatch({ type: 'removed', itemId: item.id })
                  }
                  className="absolute right-2 top-4 ml-auto"
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
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default ShoppingCartTable;
