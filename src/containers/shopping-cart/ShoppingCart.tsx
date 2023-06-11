import { BiTrashAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import resolveConfig from 'tailwindcss/resolveConfig';
import { bed1 } from '../../assets';
import { OrderSummary, PrimaryButton, SpinButton } from '../../components';
import { useMediaQuery } from '../../hooks';
import tailwindConfig from '../../../tailwind.config';

function ShoppingCart() {
  const fullConfig = resolveConfig(tailwindConfig);
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);
  return (
    <div className="px-3 md:px-12">
      <h2 className="font-dm-sans text-3xl py-4">SHOPPING CART</h2>
      {/* <div className="flex items-start gap-16">
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
            {[...Array(13)].map((i) => {
              return (
                <tr className="border-b-[1px] last:border-none border-b-primary-300">
                  <td className="pl-2 py-4">
                    <div
                      className="flex items-center gap-4 font-dm-sans min-w-max
                pr-4"
                    >
                      <img
                        src={bed1}
                        alt=""
                        className="rounded-lg min-w-0
                       object-contain object-center h-36 bg-product"
                        draggable="false"
                      />
                      <div className="flex flex-col flex-auto min-w-0 text-left">
                        <p className="font-medium break-words min-w-0">
                          Pillow Stuff
                        </p>
                        <p className="mb-2">Emerald Velvet / Cal King</p>
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <p className="font-dm-sans font-medium">$1,249</p>
                  </td>
                  <td className="relative w-28 pr-2">
                    <SpinButton
                      labelText="Quantity"
                      inputId="product-quantity-selector-cart-modal"
                      inputValue={1}
                      onValueChange={() => {}}
                      className="min-w-[7rem] md:min-w-[5rem]"
                    />
                    <button
                      type="button"
                      aria-label="Remove Pillow Stuff Emerald Velvet / Cal King"
                      className="ml-auto absolute top-4 right-2"
                    >
                      <IconContext.Provider
                        value={{
                          size: '1.4rem',
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
        <div className="self-stretch">
          <div className="sticky top-20">
            <div className="-mt-2 min-w-[20rem]">
              <OrderSummary />
            </div>
            <div className="max-w-xs mx-auto mt-4">
              <div className="flex flex-col">
                <PrimaryButton>PROCEED TO CHECKOUT</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_20rem] gap-16">
        {mediumMatches ? (
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
              {[...Array(13)].map((i) => {
                return (
                  <tr className="border-b-[1px] last:border-none border-b-primary-300">
                    <td className="pl-2 py-4">
                      <div
                        className="flex items-center gap-4 font-dm-sans min-w-max
                pr-4"
                      >
                        <img
                          src={bed1}
                          alt=""
                          className="rounded-lg min-w-0
                       object-contain object-center h-36 bg-product"
                          draggable="false"
                        />
                        <div className="flex flex-col flex-auto min-w-0 text-left">
                          <p className="font-medium break-words min-w-0">
                            Pillow Stuff
                          </p>
                          <p className="mb-2">Emerald Velvet / Cal King</p>
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <p className="font-dm-sans font-medium">$1,249</p>
                    </td>
                    <td className="relative w-28 pr-2">
                      <SpinButton
                        labelText="Quantity"
                        inputId="product-quantity-selector-cart-modal"
                        inputValue={1}
                        onValueChange={() => {}}
                        className="min-w-[7rem] md:min-w-[5rem]"
                      />
                      <button
                        type="button"
                        aria-label="Remove Pillow Stuff Emerald Velvet / Cal King"
                        className="ml-auto absolute top-4 right-2"
                      >
                        <IconContext.Provider
                          value={{
                            size: '1.4rem',
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
        ) : (
          <div className="flex items-center gap-4 font-dm-sans">
            <img
              src={bed1}
              alt=""
              className="rounded-lg flex-auto basis-1/3 min-w-0
                     object-contain object-center h-36 bg-product"
              draggable="false"
            />
            <div className="flex flex-col flex-auto min-w-0 basis-2/3 text-left">
              <div className="flex justify-between">
                <p className="font-medium break-words min-w-0">Pillow Stuff</p>
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
        )}
        <div className="row-start-1 sm:row-auto">
          {/* <OrderSummary />
          <div className="max-w-xs mx-auto mt-4">
            <div className="flex flex-col">
              <PrimaryButton>PROCEED TO CHECKOUT</PrimaryButton>
            </div>
          </div> */}
          <div className="sticky top-20">
            <div className="-mt-2 min-w-[20rem]">
              <OrderSummary />
            </div>
            <div className="max-w-xs mx-auto mt-4">
              <div className="flex flex-col">
                <PrimaryButton>PROCEED TO CHECKOUT</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
