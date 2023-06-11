import { BiPlus, BiMinus } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import { useMediaQuery } from '../hooks';
import tailwindConfig from '../../tailwind.config';
import { calculateCartTotal } from '../helpers';

interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

function OrderSummary({ cart }: { cart: CartItem[] }) {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const smallMatches = useMediaQuery(`(min-width: ${smallScreen})`);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-dm-sans">
      <div
        className="flex justify-between sm:justify-center border-b-[1px]
       border-b-primary-300 pb-1 px-3"
      >
        <h3
          className="text-xl sm:text-2xl 
            sm:text-center"
        >
          ORDER SUMMARY
        </h3>
        {!smallMatches && (
          <button
            type="button"
            aria-label={
              isOpen ? 'hide summary details' : 'show summary details'
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IconContext.Provider
                value={{
                  style: { strokeWidth: '0.05rem' },
                  className: 'text-primary-700',
                  size: '1.5rem',
                }}
              >
                <BiMinus />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider
                value={{
                  // style: { strokeWidth: '0.05rem' },
                  className: 'text-primary-700',
                  size: '1.5rem',
                }}
              >
                <BiPlus />
              </IconContext.Provider>
            )}
          </button>
        )}
      </div>
      {(smallMatches || isOpen) && (
        <div
          className="py-2 border-b-[1px] border-b-primary-300 flex flex-col
      px-3 gap-[1px]"
        >
          <div className="flex justify-between">
            <p>SUBTOTAL:</p>
            <p>
              $
              {calculateCartTotal(cart)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <div className="flex justify-between">
            <p>SHIPPING*:</p>
            <p>$89</p>
          </div>
          <div className="flex justify-between">
            <p>TAX*:</p>
            <p>$159.50</p>
          </div>
        </div>
      )}
      <div className="flex justify-between font-medium px-3 pt-2">
        <p>ESTIMATED TOTAL:</p>
        <p>$1615.50</p>
      </div>
      <p className="font-open-sans text-sm text-neutral-500 text-center px-3">
        * Shipping and tax estimated for 90001 based on your location
      </p>
    </div>
  );
}
export default OrderSummary;
