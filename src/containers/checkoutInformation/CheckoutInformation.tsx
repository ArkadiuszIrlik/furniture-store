import { BiChevronRight, BiPlus } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { BsFillHouseDoorFill } from 'react-icons/bs';

function CheckoutInformation() {
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
        <div className="flex gap-5 rounded-xl border-2 border-primary-700 px-5 py-2">
          <div className="flex justify-center items-center">
            <div className="w-5 aspect-square rounded-full border-2 border-primary-700 bg-primary-700" />
          </div>
          <div className="flex flex-col">
            <p>John Doe</p>
            <p>3012 Brooklyn Street</p>
            <p>Portland, OR 97205</p>
            <p>+1 410-414-8519</p>
          </div>
        </div>
        <div className="flex gap-5 rounded-xl border-2 border-zinc-400 px-5 py-2">
          <div className="flex justify-center items-center">
            <div className="w-5 aspect-square rounded-full border-2 border-zinc-400" />
          </div>
          <div className="flex flex-col">
            <p>John Doe</p>
            <p>3012 Brooklyn Street</p>
            <p>Portland, OR 97205</p>
            <p>+1 410-414-8519</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 rounded-xl border-2 border-zinc-400 px-5 py-2">
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
          <p>Add new address</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutInformation;
