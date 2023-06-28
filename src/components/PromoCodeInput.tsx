import { Formik, Form } from 'formik';
import { TextInput, PrimaryButton } from '.';

function PromoCodeInput({ handleSubmit }) {
  return (
    <Formik initialValues={{ code: '' }} onSubmit={handleSubmit}>
      <Form>
        <div>
          <div className="grid grid-cols-[max-content,_minmax(1fr,_8rem)] grid-rows-[min-content,min-content] gap-x-2 gap-y-1">
            <TextInput label="GIFT CARD OR PROMO CODE" name="code" />
            <PrimaryButton type="button">ADD CODE</PrimaryButton>
            <div className="col-start-2 row-start-1" />
          </div>
        </div>
      </Form>
    </Formik>
  );
}
export default PromoCodeInput;
