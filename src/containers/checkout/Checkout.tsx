import { BiChevronRight } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { PrimaryButton } from '../../components';

function Checkout() {
  return (
    <div className="font-dm-sans px-3 md:px-12 py-4">
      <h1 className="text-3xl sm:mb-1">CHECKOUT</h1>
      <nav className="mb-3 sm:mb-[5%]">
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
      <div className="flex">
        {/* fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-0 mx-auto justify-center">
          <div className="row-start-1 col-start-1 flex flex-col items-center sm:mr-7 min-w-[18rem]">
            <h2 className="text-2xl mb-1 sm:mb-3">USER CHECKOUT</h2>
            <label htmlFor="email-input" className="self-start">
              EMAIL
            </label>
            <input
              type="email"
              name="email-input"
              id="email-input"
              className="self-start rounded-lg bg-zinc-100 border-primary-700
              font-open-sans w-full mb-3
              focus:ring-0 focus:border-black focus:outline-black
              focus:outline-offset-0 focus:outline-1
              "
            />
            <label htmlFor="password-input" className="self-start">
              PASSWORD
            </label>
            <input
              type="password"
              name="password-input"
              id="password-input"
              className="self-start rounded-lg bg-zinc-100 border-primary-700
                font-open-sans mb-6 w-full
                focus:ring-0 focus:border-black focus:outline-black
              focus:outline-offset-0 focus:outline-1
                "
            />
            <div className="flex flex-col items-center mb-6">
              <div className="flex flex-col gap-2 min-w-[12rem]">
                <PrimaryButton>LOG IN</PrimaryButton>
              </div>
            </div>
            <p className="font-open-sans">
              Not a user yet?{' '}
              <a
                href=""
                className="text-accents-700 underline underline-offset-2"
              >
                Sign up
              </a>{' '}
              first
            </p>
          </div>
          <div className="row-start-2 col-start-1 sm:row-start-1 sm:col-start-2 self-center flex flex-col items-center sm:ml-7">
            <h2 className="text-2xl mb-3 sm:mb-5">GUEST CHECKOUT</h2>
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-2 min-w-[15rem]">
                <PrimaryButton>CONTINUE AS GUEST</PrimaryButton>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:row-start-1 sm:col-start-2 pointer-events-none self-center h-4/5 border-l-2 border-l-primary-300" />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
