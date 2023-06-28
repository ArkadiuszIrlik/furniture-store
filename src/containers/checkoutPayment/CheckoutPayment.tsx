import { useRef, useState } from 'react';
import {
  AddressForm,
  CheckoutRadioNarrow,
  PaymentCardForm,
} from '../../components';
import { amexIcon, discoverIcon, mastercardIcon, visaIcon } from '../../assets';

function CheckoutPayment() {
  const paymentMethods = {
    CARD: 'Credit or Debit Card',
    PAYPAL: 'PayPal',
    TEST: 'Test Transaction',
  };

  const [isShippingAndBillingSame, setIsShippingAndBillingSame] =
    useState(true);
  function handleToggleBillingValue() {
    setIsShippingAndBillingSame(!isShippingAndBillingSame);
  }

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('CARD');

  function handleChangePaymentMethod(nextMethod: 'CARD' | 'PAYPAL' | 'TEST') {
    setSelectedPaymentMethod(nextMethod);
  }

  const paymentFormRef = useRef(null);
  const billingAddressFormRef = useRef(null);

  const [billingAddressInfo, setBillingAddressInfo] = useState({
    values: {
      country: 'US',
      firstName: '',
      lastName: '',
      company: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      phoneCountry: 'US',
    },
    touched: {},
  });

  const [paymentCardInfo, setPaymentCardInfo] = useState({
    values: {
      cardNumber: '',
      cardholderName: '',
      expirationDate: '',
      securityCode: '',
    },
    touched: {},
  });

  function updatePaymentCardInfo(nextFormInfo) {
    setPaymentCardInfo({
      values: nextFormInfo.values,
      touched: nextFormInfo.touched,
    });
  }

  function updateBillingAddressInfo(nextFormInfo) {
    setBillingAddressInfo({
      values: nextFormInfo.values,
      touched: nextFormInfo.touched,
    });
  }

  return (
    <div className="font-dm-sans px-3 md:px-12 py-4">
      <h2 className="text-2xl mb-3 border-b-[1px] border-b-primary-300">
        BILLING ADDRESS
      </h2>
      <div className="flex gap-2 items-center mb-3">
        <input
          type="checkbox"
          name="billing-address-checkbox"
          id="billing-address-checkbox"
          style={{ boxShadow: 'none' }}
          className="text-primary-700 rounded-sm w-5 h-5 ring-0 focus-visible:outline-black
          border-primary-700 border-2 hover:bg-zinc-100/75 cursor-pointer"
          checked={isShippingAndBillingSame}
          onChange={handleToggleBillingValue}
        />
        <label
          htmlFor="billing-address-checkbox"
          className="cursor-pointer"
          aria-label="billing address is the same as shipping address"
        >
          Same as shipping address
        </label>
      </div>
      {!isShippingAndBillingSame && (
        <div className="mb-5">
          <AddressForm
            initialValues={billingAddressInfo.values}
            initialTouched={billingAddressInfo.touched}
            onFormChange={updateBillingAddressInfo}
            formRef={billingAddressFormRef}
          />
        </div>
      )}
      <h2 className="text-2xl mb-3 border-b-[1px] border-b-primary-300">
        PAYMENT
      </h2>
      <div className="flex flex-col gap-2 mb-5">
        {Object.keys(paymentMethods).map((method, index) => (
          <CheckoutRadioNarrow
            key={index}
            label={paymentMethods[method]}
            name="payment-method"
            id={`payment-method-${method}`}
            value={method}
            checked={method === selectedPaymentMethod}
            onChange={(e) => handleChangePaymentMethod(e.target.value)}
          >
            <div className="flex justify-between items-center">
              <p>{paymentMethods[method]}</p>
              {method === 'CARD' && (
                <div className="ml-auto flex items-center gap-1">
                  <img src={visaIcon} alt="" />
                  <img src={mastercardIcon} alt="" />
                  <img src={amexIcon} alt="" />
                  <img src={discoverIcon} alt="" />
                </div>
              )}
            </div>
          </CheckoutRadioNarrow>
        ))}
      </div>
      {selectedPaymentMethod === 'CARD' && (
        <div>
          <h3 className="text-xl mb-1">CARD DETAILS</h3>
          <div className="h-[1px] bg-primary-300" />
          <PaymentCardForm
            initialValues={paymentCardInfo.values}
            initialTouched={paymentCardInfo.touched}
            onFormChange={updatePaymentCardInfo}
            formRef={paymentFormRef}
          />
        </div>
      )}
    </div>
  );
}
export default CheckoutPayment;
