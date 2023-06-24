import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { FormObserver, TextInput } from '.';
import { visaIcon, amexIcon, mastercardIcon, discoverIcon } from '../assets';

function PaymentCardForm({
  initialValues = {
    cardNumber: '',
    cardholderName: '',
    expirationDate: '',
    securityCode: '',
  },
  initialTouched = {},
  onFormChange,
  formRef,
}) {
  const acceptedCards = [
    {
      name: 'Visa',
      fullRegex: /^4[0-9]{12}(?:[0-9]{3})?$/,
      prefixRegex: /^4/,
      icon: visaIcon,
    },
    {
      name: 'MasterCard',
      fullRegex:
        /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
      prefixRegex: /^5/,
      icon: mastercardIcon,
    },
    {
      name: 'Amex',
      fullRegex: /^3[47][0-9]{13}$/,
      prefixRegex: /^3/,
      icon: amexIcon,
    },
    {
      name: 'Discover',
      fullRegex:
        /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
      prefixRegex: /^65/,
      icon: discoverIcon,
    },
  ];

  const [cardProviderIndex, setCardProviderIndex] = useState<null | number>(
    null
  );

  function determineCardProvider({ values }) {
    // if (values.cardNumber.length <= 2) {
    for (let i = 0; i < acceptedCards.length; i++) {
      if (acceptedCards[i].prefixRegex.test(values.cardNumber)) {
        setCardProviderIndex(i);
        break;
      } else if (i === acceptedCards.length - 1) {
        setCardProviderIndex(null);
      }
    }
    // }
  }

  return (
    <div>
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        initialTouched={initialTouched}
        validationSchema={Yup.object({
          cardNumber: Yup.string()
            .test(
              'validCardNumber',
              'Provided card number is invalid',
              function (value) {
                let sum = 0;
                let shouldDouble = false;
                for (let i = value.length - 1; i >= 0; i--) {
                  let digit = parseInt(value.charAt(i), 10);

                  if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) {
                      digit -= 9;
                    }
                  }

                  sum += digit;
                  shouldDouble = !shouldDouble;
                }

                const valid = sum % 10 === 0;
                let accepted = false;

                acceptedCards.forEach((provider) => {
                  if (provider.fullRegex.test(value)) {
                    accepted = true;
                  }
                });

                return valid && accepted;
              }
            )
            .transform((value) => value.replaceAll(/\D/g, ''))
            .defined()
            .required('Please enter a card number'),
          cardholderName: Yup.string()
            .defined()
            .required('Please enter the name on card'),
          expirationDate: Yup.string()
            .test(
              'isValidDate',
              'Please enter the expiration date in format MM/YY',
              (value) => /^\d{2}\/\d{2}$/.test(value)
            )
            .defined()
            .required('Please enter the expiration date'),
          securityCode: Yup.string()
            .test(
              'isValidSecurityCode',
              'Please enter a valid 3 or 4 digit code',
              (value) => /^\d{3,4}$/.test(value)
            )
            .defined()
            .required('Please enter the security code'),
        })}
        validateOnMount
      >
        <Form className="flex flex-col gap-4 pt-3 pb-7">
          <div className="w-72 relative grid grid-cols-1 grid-flow-row items-center">
            <TextInput
              label="CARD NUMBER"
              name="cardNumber"
              id="cardNumberInput"
              type="text"
              inputMode="numeric"
              placeholder="4032-0373-4103-8566"
              maxLength="20"
            />
            {cardProviderIndex !== null && (
              <img
                src={acceptedCards[cardProviderIndex].icon}
                alt=""
                srcSet=""
                className="absolute right-[15%] row-start-2 row-span-1"
              />
            )}
          </div>
          <div className="max-w-lg">
            <TextInput
              label="NAME ON CARD"
              name="cardholderName"
              id="cardholderNameInput"
              type="text"
              placeholder="John Doe"
              maxLength="30"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            {/* <div className="w-36 [&>div:first-of-type]:w-24"> */}
            <div className="w-36">
              <TextInput
                label="EXPIRATION DATE"
                name="expirationDate"
                id="expirationDateInput"
                type="text"
                inputMode="numeric"
                placeholder="12/27"
                maxLength="5"
              />
            </div>
            <div className="w-32">
              <TextInput
                label="SECURITY CODE"
                name="securityCode"
                id="securityCodeInput"
                type="text"
                inputMode="numeric"
                placeholder="014"
                maxLength="4"
              />
            </div>
          </div>
          <FormObserver
            onChange={(changeObj) => {
              determineCardProvider(changeObj);
              if (onFormChange) {
                onFormChange(changeObj);
              }
            }}
          />
        </Form>
      </Formik>
    </div>
  );
}
export default PaymentCardForm;
