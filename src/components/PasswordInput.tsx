import { useField } from 'formik';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { BiHide, BiShow } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import { useMediaQuery } from '../hooks';

function PasswordInput({ label, ...props }) {
  const fullConfig = resolveConfig(tailwindConfig);
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  const [field, meta] = useField(props);
  const [isPasswordShown, setIsPasswordShown] = useState(!mediumMatches);

  function togglePassowrdShown() {
    setIsPasswordShown(!isPasswordShown);
  }

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
          className="border-none bg-transparent rounded-lg
          px-2 py-1 w-full focus:ring-0
          focus-visible:outline-none
          "
          aria-invalid={meta.touched && meta.error}
          aria-describedby={`${props.id || props.name}-error`}
          type={isPasswordShown ? 'text' : 'password'}
          {...field}
          {...props}
        />
        <button
          type="button"
          className="mr-3"
          onClick={togglePassowrdShown}
          aria-label={isPasswordShown ? 'hide password' : 'show password'}
        >
          <IconContext.Provider
            value={{
              // style: { strokeWidth: '0.05rem' },
              className: 'text-text',
              size: '1.2rem',
            }}
          >
            {isPasswordShown ? <BiHide /> : <BiShow />}
          </IconContext.Provider>
        </button>
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
export default PasswordInput;
