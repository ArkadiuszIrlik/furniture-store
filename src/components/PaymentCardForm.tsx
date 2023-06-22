import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormObserver, TextInput } from '.';

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
  const acceptedCards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard:
      /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    amex: /^3[47][0-9]{13}$/,
    discover:
      /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
  };

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

                Object.keys(acceptedCards).forEach((key) => {
                  const regex = acceptedCards[key];
                  if (regex.test(value)) {
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
            .defined()
            .required('Please enter the expiration date'),
          securityCode: Yup.string()
            .defined()
            .required('Please enter the security code'),
        })}
        validateOnMount
      >
        <Form className="flex flex-col gap-4 pt-3 pb-7">
          <div className="w-60">
            <TextInput
              label="CARD NUMBER"
              name="cardNumber"
              id="cardNumberInput"
              type="text"
              inputMode="numeric"
              placeholder="4032-0373-4103-8566"
              maxLength="20"
            />
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
              />
            </div>
          </div>
          {onFormChange && <FormObserver onChange={onFormChange} />}
        </Form>
      </Formik>
    </div>
  );
}
export default PaymentCardForm;
