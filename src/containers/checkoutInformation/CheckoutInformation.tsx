import { BiChevronRight, BiPlus } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

function CheckoutInformation() {
  const [savedAddressList, setSavedAddressList] = useState<object[]>([]);
  useEffect(() => {
    setSavedAddressList([
      {
        name: 'Billy Jean',
        addressLine1: '3687 Glen Street',
        addressLine2: 'Portland, OR 97205',
        phoneNumber: '+1 410-414-8519',
      },
      {
        name: 'Billy Jean',
        addressLine1: '3687 Glen Street',
        addressLine2: 'Portland, OR 97205',
        phoneNumber: '+1 410-414-8519',
      },
      {
        name: 'Billy Jean',
        addressLine1: '3687 Glen Street',
        addressLine2: 'Portland, OR 97205',
        phoneNumber: '+1 410-414-8519',
      },
    ]);
  }, []);

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  function handleChangeAddressIndex(nextIndex: number) {
    setSelectedAddressIndex(nextIndex);
  }

  function handleAddAddress() {
    setSavedAddressList([...savedAddressList, { name: 'New Address' }]);
  }

  return (
    <div className="font-dm-sans px-3 md:px-12 py-4">
      <h1 className="text-3xl sm:mb-1">CHECKOUT</h1>
      <nav className="mb-3">
        <ul className="flex items-center flex-wrap gap-x-0 font-medium text-zinc-500">
          <IconContext.Provider
            value={{
              size: '1.9rem',
              className: 'text-text shrink-0',
            }}
          >
            <li>
              <a href="#" className="hover:text-text">
                Cart
              </a>
            </li>
            <BiChevronRight />
            <li className="font-bold text-text">
              <a href="#" className="hover:text-text">
                Information
              </a>
            </li>
            <BiChevronRight />
            <li>
              <a href="#" className="hover:text-text">
                Shipping
              </a>
            </li>
            <BiChevronRight />
            <li>
              <a href="#" className="hover:text-text">
                Payment
              </a>
            </li>
          </IconContext.Provider>
        </ul>
      </nav>
      <h2 className="text-2xl mb-2">SHIPPING ADDRESS</h2>
      <div className="flex gap-3">
        <fieldset className="flex flex-wrap gap-3">
          <legend className="sr-only">Choose shipping address</legend>
          {savedAddressList.map((address, index) => (
            <label
              htmlFor={`saved-address-${index}`}
              className={`flex gap-5 rounded-xl border-2 ${
                selectedAddressIndex === index
                  ? 'border-primary-700'
                  : 'border-zinc-400 hover:bg-zinc-100/75 hover:border-primary-700'
              } px-5 py-2 cursor-pointer group`}
              aria-label={Object.values(address).join(', ')}
              key={index}
            >
              <div className="flex justify-center items-center">
                <div
                  className={`w-5 aspect-square rounded-full border-2 ${
                    selectedAddressIndex === index
                      ? 'border-primary-700 bg-primary-700'
                      : 'border-zinc-400 group-hover:border-primary-700'
                  }`}
                />
              </div>
              <div
                className="flex flex-col justify-center"
                aria-hidden="true"
                id=""
              >
                {Object.values(address).map((addressLine, lineIndex) => (
                  <p key={lineIndex}>{addressLine}</p>
                ))}
              </div>
              <input
                type="radio"
                name="saved-address"
                id={`saved-address-${index}`}
                value={index}
                checked={index === selectedAddressIndex}
                onChange={(e) =>
                  handleChangeAddressIndex(Number(e.target.value))
                }
                className="sr-only"
              />
            </label>
          ))}
          <button
            type="button"
            className="flex flex-col justify-center items-center gap-2
             rounded-xl border-2 border-zinc-400 px-5 py-2 hover:bg-zinc-100
              hover:border-primary-700"
            onClick={handleAddAddress}
            aria-label="Add new address"
          >
            <div className="flex justify-center items-end">
              <IconContext.Provider
                value={{
                  size: '1.7rem',
                  className: 'text-zinc-400 -mr-1',
                }}
              >
                <BiPlus />
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  size: '2.5rem',
                  className: 'text-zinc-400 ',
                }}
              >
                <BsFillHouseDoorFill />
              </IconContext.Provider>
            </div>
            <p aria-hidden="true">Add new address</p>
          </button>
        </fieldset>
      </div>
    </div>
  );
}

export default CheckoutInformation;
