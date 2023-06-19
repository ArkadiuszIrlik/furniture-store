// import countryData from 'phone/dist/data/country_phone_data';
// import { useEffect, useState } from 'react';
// import phone from 'phone';
import { useField } from 'formik';
import { countryPhoneData } from 'phone';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import * as flags from '../assets/flagList';

// import andoraFlag from '../assets/flags/AD.svg';
// import * as flags from '../assets/flagList';

function PhoneInput({ country, label, children, ...props }) {
  // const [country, setCountry] = useState(initialCountry);
  const [field, meta] = useField(props);
  // useEffect(() => {
  //     onCountryUpdate();
  // }, [country])

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <div
        className={`relative rounded-lg flex items-center gap-0 bg-gray-200/50
        ${
          meta.touched && meta.error
            ? ' border-2 border-warning'
            : ' border-[1px] border-primary-700'
        } overflow-hidden`}
      >
        <div
          className="relative min-w-[3.5rem] shrink-0 self-stretch flex items-stretch
         overflow-hidden group pointer-events-none"
        >
          <div
            className="relative z-20 px-2 pointer-events-none text-black
            bg-transparent flex items-center gap-1 grow peer-hover:bg-gray-200/50
             group-focus-within:outline -outline-offset-2 rounded-lg"
          >
            {flags[country] ? (
              <img
                src={flags[country]}
                alt=""
                className="w-6 shadow border-[1px] border-gray-300"
              />
            ) : (
              <p className="ml-auto">
                {(countryPhoneData.find((e) => e.alpha2 === country) &&
                  `+${
                    countryPhoneData.find((e) => e.alpha2 === country)
                      .country_code
                  }`) ||
                  country}
              </p>
            )}
            <span className="ml-auto text-xs align-baseline">▼</span>
          </div>
          {children}
        </div>
        <input
          className="pl-2 py-1 relative z-0 bg-transparent w-full
         border-none grow focus:-outline-offset-2 rounded-lg 
         focus:outline focus:outline-2 focus:outline-black focus:ring-0
         "
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
export default PhoneInput;
