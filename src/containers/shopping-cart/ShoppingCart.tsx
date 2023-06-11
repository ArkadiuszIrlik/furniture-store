import resolveConfig from 'tailwindcss/resolveConfig';
import { Dispatch } from 'react';
import {
  OrderSummary,
  PrimaryButton,
  ShoppingCartList,
  ShoppingCartTable,
} from '../../components';
import { useMediaQuery } from '../../hooks';
import tailwindConfig from '../../../tailwind.config';

interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

function ShoppingCart({
  cart,
  cartDispatch,
}: {
  cart: CartItem[];
  cartDispatch: Dispatch<any>;
}) {
  const fullConfig = resolveConfig(tailwindConfig);
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);
  return (
    <div className="px-3 md:px-12">
      <h2 className="font-dm-sans text-3xl py-4">SHOPPING CART</h2>
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_20rem] gap-16 items-start">
        {mediumMatches ? (
          <ShoppingCartTable cart={cart} cartDispatch={cartDispatch} />
        ) : (
          <ShoppingCartList cart={cart} cartDispatch={cartDispatch} />
        )}
        <div className="row-start-1 sm:row-auto self-stretch">
          <div className="sticky top-20">
            <div className="-mt-2 min-w-[20rem]">
              <OrderSummary cart={cart} />
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
