import { useField } from 'formik';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

function SelectInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="block">
        {label}
      </label>
      <div
        className={`flex items-center ${
          meta.touched && meta.error
            ? ' border-2 border-warning'
            : ' border-[1px] border-primary-700'
        } bg-gray-200/50 rounded-lg
        focus-within:border-black focus-within:outline focus-within:outline-2
         focus-within:outline-black focus-within:outline-offset-0`}
      >
        <select
          className="border-none bg-transparent rounded-lg
          pl-2 pr-7 py-1 w-full focus:ring-0
           truncate"
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="pr-3">
            <IconContext.Provider
              value={{
                className: 'text-warning',
                size: '1.2rem',
              }}
            >
              <BsFillExclamationTriangleFill />
            </IconContext.Provider>
          </div>
        ) : null}
      </div>
      {meta.touched && meta.error ? (
        <div className="px-1 text-warning">{meta.error}</div>
      ) : null}
    </>
  );
}
export default SelectInput;
