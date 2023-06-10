import { CiUser } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { HiMenu } from 'react-icons/hi';
import resolveConfig from 'tailwindcss/resolveConfig';
import { useState, useRef } from 'react';
import { ElevaLogo } from '../../assets';
import tailwindConfig from '../../../tailwind.config';
import {
  Search,
  HeaderNavbar,
  ShoppingCartModal,
  CartQuantityCounter,
} from '../../components';
import { useMediaQuery } from '../../hooks';

function Header() {
  const fullConfig = resolveConfig(tailwindConfig);
  const textColor = fullConfig.theme.colors.text;
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  const [isCartModalShown, setIsCartModalShown] = useState(false);
  const cartModalRef = useRef(null);

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
    async function animationEnd() {
      return new Promise(
        (resolve) => (cartModalRef.current.onanimationend = () => resolve())
      );
    }
    await animationEnd();
    setIsCartModalShown(false);
  }

  return (
    <header>
      <div
        className="grid grid-cols-[1fr_minmax(max-content,_60%)_1fr]
           grid-rows-[repeat(2,_max-content)] items-center
            pt-1 md:pt-5 pb-2 px-3 md:px-12 gap-y-2 md:gap-y-4"
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
          className="justify-self-center md:justify-self-start w-28"
        />
        <div className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
          <Search />
        </div>
        <div className="flex gap-2 justify-end items-center">
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
            className="relative group flex items-end"
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
            <CartQuantityCounter />
            {isCartModalShown && <ShoppingCartModal ref={cartModalRef} />}
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
