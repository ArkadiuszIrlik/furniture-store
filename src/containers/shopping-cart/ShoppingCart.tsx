import { BiTrashAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { bed1 } from '../../assets';
import { SpinButton } from '../../components';

function ShoppingCart() {
  return (
    <div className="px-3 md:px-12">
      <h2 className="font-dm-sans text-3xl py-4">SHOPPING CART</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-4 font-dm-sans">
                  <img
                    src={bed1}
                    alt=""
                    className="rounded-lg flex-auto basis-1/3 min-w-0
                     object-contain object-center h-36 bg-product"
                    draggable="false"
                  />
                  <div className="flex flex-col flex-auto min-w-0 basis-2/3 text-left">
                    <p className="font-medium break-words min-w-0">
                      Pillow Stuff
                    </p>
                    <p className="mb-2">Emerald Velvet / Cal King</p>
                  </div>
                </div>
              </td>
              <td>
                <p>$1,249</p>
              </td>
              <td>
                <div className="flex flex-col justify-start h-full">
                  <div className="ml-auto">
                    <IconContext.Provider
                      value={{
                        size: '1.3rem',
                        className: 'text-text shrink-0',
                      }}
                    >
                      <BiTrashAlt />
                    </IconContext.Provider>
                  </div>

                  <SpinButton
                    labelText="Quantity"
                    inputId="product-quantity-selector-cart-modal"
                    inputValue={1}
                    onValueChange={() => {}}
                    className="min-w-[7rem] md:min-w-[5rem]"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ShoppingCart;
