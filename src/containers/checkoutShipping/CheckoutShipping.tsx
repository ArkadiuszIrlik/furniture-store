import { useState } from 'react';
import OrderSummaryCheckout from '../../components/OrderSummaryCheckout';
import { formatPriceDollars } from '../../helpers';
import { CheckoutRadioNarrow } from '../../components';

function CheckoutShipping({ cart }) {
  const shippingMethods = [{ name: 'Shipping and handling', priceUsd: 80 }];

  const [selectedShippingIndex, setSelectedShippingIndex] = useState<number>(0);

  function handleChangeShippingIndex(nextIndex) {
    setSelectedShippingIndex(nextIndex);
  }
  return (
    <div className="font-dm-sans px-3 md:px-12 py-4">
      <div className="grid grid-cols-[minmax(0,_1fr),23rem]">
        <div>
          <h2 className="text-2xl mb-3 border-b-[1px] border-b-primary-300">
            SHIPPING METHOD
          </h2>
          <div className="flex flex-col gap-2 mb-5">
            {shippingMethods.map((method, index) => (
              <CheckoutRadioNarrow
                key={index}
                label={method.name}
                name="shipping-method"
                id={`shipping-method-${index}`}
                value={index}
                checked={index === selectedShippingIndex}
                onChange={(e) =>
                  handleChangeShippingIndex(Number(e.target.value))
                }
              >
                <div className="flex justify-between items-center">
                  <p>{method.name}</p>
                  <p>{formatPriceDollars(method.priceUsd)}</p>
                </div>
              </CheckoutRadioNarrow>
            ))}
          </div>
        </div>
        <OrderSummaryCheckout
          cart={cart}
          shippingCost={shippingMethods[selectedShippingIndex].priceUsd}
        />
      </div>
    </div>
  );
}
export default CheckoutShipping;
