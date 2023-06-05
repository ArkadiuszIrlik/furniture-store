import { BiPlus, BiMinus } from 'react-icons/bi';
import { IconContext } from 'react-icons';

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
  function decrement() {
    onValueChange(inputValue - 1);
  }
  function increment() {
    onValueChange(inputValue + 1);
  }
  return (
    <div className={className}>
      <label htmlFor={inputId} className="block font-dm-sans mb-1">
        {labelText}
      </label>
      {/* <div className="rounded-md bg-gray-400 grid grid-cols-[2rem,_4rem,_2rem]"> */}
      <div className="rounded-md border-2 border-neutral-200 bg-neutral-200 grid grid-cols-3">
        <button
          type="button"
          // className="border-r-[2px] border-r-white"
          // className="border-r-[1px] border-r-neutral-300 flex
          // justify-center items-center"
          className=" flex
          justify-center items-center"
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
            value={inputValue}
            onChange={(e) => onValueChange(Number(e.currentTarget.value))}
            min="1"
            max="99"
            className="
            border-none font-dm-sans px-0 py-1
            bg-transparent w-full text-center
              focus:ring-0 focus:border-white
              focus:outline-black focus:-outline-offset-2


               "
            //  border-x-[1px] border-x-white border-y-0
            //  focus:border-red-400 focus:border-2 focus:border-solid
            //  focus:outline-black focus:outline-offset-0
          />
        </div>
        <button
          type="button"
          // className="border-l-[2px] border-l-white"
          // className="border-l-[1px] border-l-neutral-300 flex
          // justify-center items-center"
          className="flex
          justify-center items-center"
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
