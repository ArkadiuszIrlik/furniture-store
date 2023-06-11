import { Dispatch } from 'react';
import { IconContext } from 'react-icons';
import { BiTrashAlt } from 'react-icons/bi';
import { SpinButton } from '.';

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
          <th className="font-normal pb-1 pl-2">ITEM</th>
          <th className="font-normal pb-1">PRICE</th>
          <th className="font-normal pb-1 pr-2">QUANTITY</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
          return (
            <tr
              className="border-b-[1px] last:border-none border-b-primary-300"
              key={item.id}
            >
              <td className="pl-2 py-4">
                <div
                  className="flex items-center gap-4 font-dm-sans min-w-max
                pr-4"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-lg min-w-0
                       object-contain object-center h-36 bg-product"
                    draggable="false"
                  />
                  <div className="flex flex-col flex-auto min-w-0 text-left">
                    <p className="font-medium break-words min-w-0">
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
                  className="ml-auto absolute top-4 right-2"
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
