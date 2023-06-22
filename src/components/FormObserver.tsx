import { useEffect } from 'react';
import { useFormikContext } from 'formik';

function FormObserver({ onChange }) {
  const { values, touched } = useFormikContext();
  useEffect(() => {
    onChange({ values, touched });
  }, [values, touched]);
  return null;
}
export default FormObserver;
