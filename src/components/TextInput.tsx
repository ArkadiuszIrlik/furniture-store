import { useField } from 'formik';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="block">
        {label}
      </label>
      <div
        className={`flex items-center ${
          meta.touched && meta.error
            ? ' border-2 border-warning focus-within:outline-none'
            : ' border-[1px] border-primary-700 focus-within:outline'
        } bg-gray-200/50 rounded-lg
      focus-within:border-black
      focus-within:outline-2 
      focus-within:outline-offset-0`}
      >
        <input
          // className="border-[1px] border-primary-700 bg-gray-200/50 rounded-lg
          // px-2 py-1 w-full focus:ring-0
          // focus:border-black focus:outline focus:outline-2 focus:outline-black
          // focus:outline-offset-0"
          className="border-none bg-transparent rounded-lg
          px-2 py-1 w-full focus:ring-0
          "
          aria-invalid={meta.touched && meta.error}
          aria-describedby={`${props.id || props.name}-error`}
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
        <div
          className="px-1 text-warning"
          id={`${props.id || props.name}-error`}
        >
          {meta.error}
        </div>
      ) : null}
    </>
  );
}
export default TextInput;
