'use client';

import { BiPlus, BiMinus } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useState, useEffect } from 'react';

function SpinButton({
  inputId,
  inputValue,
  onValueChange,
  labelText,
  className = '',
}: {
  inputId: string;
  inputValue: number;
  onValueChange: (value: number) => any;
  labelText: string;
  className?: string;
}) {
  const [localValue, setLocalValue] = useState(inputValue);

  useEffect(() => {
    setLocalValue(inputValue);
  }, [inputValue]);

  function handleValueChange(nextValue) {
    if (nextValue === '' || (nextValue >= 1 && nextValue <= 99)) {
      setLocalValue(nextValue);
    }
  }
  function decrement() {
    onValueChange(inputValue - 1);
  }
  function increment() {
    onValueChange(inputValue + 1);
  }
  return (
    <div className={className}>
      <div
        className="grid grid-cols-3 rounded-md border-2
         border-neutral-200 bg-neutral-200"
      >
        <button
          type="button"
          className=" flex
          items-center justify-center"
          tabIndex={-1}
          aria-hidden="true"
          onClick={decrement}
          disabled={inputValue === 1}
        >
          <IconContext.Provider
            value={{
              className: inputValue === 1 ? 'text-neutral-400' : '',
            }}
          >
            <BiMinus />
          </IconContext.Provider>
        </button>
        <div className="flex">
          <input
            type="number"
            inputMode="numeric"
            name={inputId}
            id={inputId}
            value={localValue}
            onChange={(e) => handleValueChange(e.currentTarget.value)}
            onBlur={(e) => {
              const fieldValue = e.currentTarget.value;
              if (fieldValue === '' || !(fieldValue >= 1 && fieldValue <= 99)) {
                setLocalValue(inputValue);
              }
              onValueChange(Number(fieldValue));
            }}
            min="1"
            max="99"
            className="
            w-full border-none bg-transparent px-0
            py-1 text-center font-dm-sans
              focus:border-white focus:-outline-offset-2
              focus:outline-black focus:ring-0"
          />
        </div>
        <button
          type="button"
          className="flex 
          items-center justify-center"
          tabIndex={-1}
          aria-hidden="true"
          onClick={increment}
          disabled={inputValue === 99}
        >
          <IconContext.Provider
            value={{
              className: inputValue === 99 ? 'text-neutral-400' : '',
            }}
          >
            <BiPlus />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
export default SpinButton;
