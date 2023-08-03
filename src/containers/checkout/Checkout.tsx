import { BiChevronRight } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { PrimaryButton } from '../../components';

function Checkout() {
  return (
    <div className="font-dm-sans ">
      <h1 className="text-3xl sm:mb-1">CHECKOUT</h1>
      <nav className="mb-3 sm:mb-[5%]">
        <ul className="flex flex-wrap items-center gap-x-0 font-medium text-zinc-500">
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
        <div className="mx-auto grid grid-cols-1 justify-center gap-7 sm:grid-cols-2 sm:gap-0">
          <div className="col-start-1 row-start-1 flex min-w-[18rem] flex-col items-center sm:mr-7">
            <h2 className="mb-1 text-2xl sm:mb-3">USER CHECKOUT</h2>
            <label htmlFor="email-input" className="self-start">
              EMAIL
            </label>
            <input
              type="email"
              name="email-input"
              id="email-input"
              className="mb-3 w-full self-start rounded-lg
              border-primary-700 bg-zinc-100 font-open-sans
              focus:border-black focus:outline-1 focus:outline-offset-0
              focus:outline-black focus:ring-0
              "
            />
            <label htmlFor="password-input" className="self-start">
              PASSWORD
            </label>
            <input
              type="password"
              name="password-input"
              id="password-input"
              className="mb-6 w-full self-start rounded-lg
                border-primary-700 bg-zinc-100 font-open-sans
                focus:border-black focus:outline-1 focus:outline-offset-0
              focus:outline-black focus:ring-0
                "
            />
            <div className="mb-6 flex flex-col items-center">
              <div className="flex min-w-[12rem] flex-col gap-2">
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
          <div className="col-start-1 row-start-2 flex flex-col items-center self-center sm:col-start-2 sm:row-start-1 sm:ml-7">
            <h2 className="mb-3 text-2xl sm:mb-5">GUEST CHECKOUT</h2>
            <div className="flex flex-col items-center">
              <div className="flex min-w-[15rem] flex-col gap-2">
                <PrimaryButton>CONTINUE AS GUEST</PrimaryButton>
              </div>
            </div>
          </div>
          <div className="pointer-events-none hidden h-4/5 self-center border-l-2 border-l-primary-300 sm:col-start-2 sm:row-start-1 sm:block" />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
