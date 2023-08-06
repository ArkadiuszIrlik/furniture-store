import { CiUser } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { HiMenu } from 'react-icons/hi';
import resolveConfig from 'tailwindcss/resolveConfig';
import { useState, useRef, Dispatch } from 'react';
import { ElevaLogo } from '../../assets';
import tailwindConfig from '../../../tailwind.config';
import {
  Search,
  HeaderNavbar,
  ShoppingCartModal,
  CartQuantityCounter,
} from '../../components';
import { useMediaQuery } from '../../hooks';

interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

function Header({
  cart,
  cartDispatch,
}: {
  cart: CartItem[];
  cartDispatch: Dispatch<any>;
}) {
  const fullConfig = resolveConfig(tailwindConfig);
  const textColor = fullConfig.theme.colors.text;
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  const [isCartModalShown, setIsCartModalShown] = useState(false);
  const cartModalRef = useRef<HTMLInputElement | null>(null);
  const totalQuantity = cart.reduce((total, next) => total + next.quantity, 0);

  function showCartModal() {
    setIsCartModalShown(true);
  }
  async function hideCartModal() {
    if (!cartModalRef.current) {
      return;
    }
    cartModalRef.current.classList.remove(
      'animate-[slide-up-fade-in_0.4s_ease-out]'
    );
    cartModalRef.current.classList.add(
      'animate-[slide-down-fade-out_0.4s_ease-out]'
    );
    async function animationEnd(): Promise<void> {
      return new Promise<void>((resolve): void => {
        if (cartModalRef.current) {
          cartModalRef.current.onanimationend = () => resolve();
        }
      });
    }
    await animationEnd();
    setIsCartModalShown(false);
  }

  return (
    <header>
      <div
        className="grid grid-cols-[1fr_minmax(max-content,_60%)_1fr]
           grid-rows-[repeat(2,_max-content)] items-center
            gap-y-2 px-3 pb-2 pt-1 md:gap-y-4 md:px-12 md:pt-5"
      >
        <IconContext.Provider
          value={{
            style: { strokeWidth: '0.05rem', stroke: textColor },
            size: '1.5rem',
          }}
        >
          {!mediumMatches && <HiMenu />}
        </IconContext.Provider>
        <img
          src={ElevaLogo}
          alt="Eleva Design Logo"
          srcSet=""
          className="w-28 justify-self-center md:justify-self-start"
        />
        <div className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
          <Search />
        </div>
        <div className="flex items-center justify-end gap-2">
          <button onClick={() => console.log(`clicked user${Math.random()}`)}>
            <IconContext.Provider
              value={{
                style: { strokeWidth: '0.05rem', stroke: textColor },
                size: '1.5rem',
              }}
            >
              <CiUser />
            </IconContext.Provider>
          </button>
          <div
            className="group relative flex items-end"
            onMouseEnter={showCartModal}
            onMouseLeave={hideCartModal}
          >
            <button
              type="button"
              onClick={() => console.log(`clicked${Math.random()}`)}
            >
              <IconContext.Provider
                value={{
                  style: { strokeWidth: '0.1rem', stroke: textColor },
                  size: '1.5rem',
                }}
              >
                {/* <div className="peer"> */}
                <FiShoppingCart />
                {/* </div> */}
              </IconContext.Provider>
            </button>
            <CartQuantityCounter quantity={totalQuantity} />
            {isCartModalShown && (
              <ShoppingCartModal
                ref={cartModalRef}
                cart={cart}
                cartDispatch={cartDispatch}
              />
            )}
          </div>
        </div>
        {mediumMatches && (
          <div className="col-span-full row-start-2 ">
            <HeaderNavbar />
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
