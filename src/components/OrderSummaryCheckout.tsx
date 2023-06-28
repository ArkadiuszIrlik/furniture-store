import { BiPlus, BiMinus } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import { useMediaQuery } from '../hooks';
import tailwindConfig from '../../tailwind.config';
import { calculateCartTotal, formatPriceDollars } from '../helpers';
import PromoCodeInput from './PromoCodeInput';

interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

function OrderSummaryCheckout({
  cart,
  shippingCost,
  taxRate,
}: {
  cart: CartItem[];
}) {
  const subtotal = calculateCartTotal(cart);
  const taxDue = Math.round(subtotal * taxRate * 100) / 100;
  const total =
    Math.round(
      (subtotal +
        (taxRate !== undefined ? taxDue : 0) +
        (shippingCost !== undefined ? shippingCost : 0)) *
        100
    ) / 100;

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
        <>
          <div className="py-2 border-b-[1px] border-b-primary-300 px-1">
            <p className="text-center">
              {cart.reduce((total, next) => {
                return total + next.quantity;
              }, 0)}{' '}
              ITEMS
            </p>
            <div className="grid grid-cols-[min-content_20%_1fr_min-content] items-center gap-2">
              {cart.map((item) => {
                return (
                  <>
                    <p className="whitespace-nowrap">{item.quantity} x</p>
                    <img
                      src={item.image}
                      alt=""
                      srcSet=""
                      className="rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.details && <p>{item.details}</p>}
                    </div>
                    <p className="font-medium ml-auto">
                      {formatPriceDollars(item.quantity * item.priceUsd)}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
          <div className="pt-2 pb-3 px-3 border-b-[1px] border-b-primary-300">
            <PromoCodeInput handleSubmit={() => undefined} />
          </div>
          <div
            className="py-2 border-b-[1px] border-b-primary-300 flex flex-col
      px-3 gap-[1px]"
          >
            <div className="flex justify-between">
              <p>SUBTOTAL:</p>
              <p>{formatPriceDollars(subtotal)}</p>
            </div>
            <div className="flex justify-between">
              <p>SHIPPING:</p>
              <p>{shippingCost ? formatPriceDollars(shippingCost) : '-'}</p>
            </div>
            <div className="flex justify-between">
              <p>TAX:</p>
              <p>{taxRate ? formatPriceDollars(taxDue) : '-'}</p>
            </div>
          </div>
        </>
      )}
      <div className="flex justify-between font-medium px-3 pt-2">
        <p>TOTAL:</p>
        <p>{formatPriceDollars(total)}</p>
      </div>
    </div>
  );
}
export default OrderSummaryCheckout;
