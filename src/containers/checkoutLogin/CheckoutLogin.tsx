import { LoginForm, PrimaryButton } from '../../components';

function CheckoutLogin() {
  return (
    <div className="flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-0 mx-auto justify-center">
        <div className="row-start-1 col-start-1 flex flex-col items-stretch sm:mr-10 min-w-[18rem]">
          <h2 className="text-2xl mb-1 sm:mb-3 text-center">USER CHECKOUT</h2>
          <div className="mb-4 sm:mb-7">
            <LoginForm />
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="flex flex-col gap-2 min-w-[12rem]">
              <PrimaryButton>LOG IN</PrimaryButton>
            </div>
          </div>
          <p className="font-open-sans text-center">
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
        <div
          className="row-start-2 col-start-1 sm:row-start-1 sm:col-start-2
           self-center flex flex-col items-stretch justify-self-start sm:ml-10"
        >
          <h2 className="text-2xl mb-3 sm:mb-5 text-center">GUEST CHECKOUT</h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-2 min-w-[15rem]">
              <PrimaryButton>CONTINUE AS GUEST</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="hidden sm:block sm:row-start-1 sm:col-start-2 pointer-events-none self-center h-4/5 border-l-2 border-l-primary-300" />
      </div>
    </div>
  );
}
export default CheckoutLogin;
