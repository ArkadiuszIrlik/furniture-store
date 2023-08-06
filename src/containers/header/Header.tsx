// import { CiUser } from 'react-icons/ci';
// import { HiMenu } from 'react-icons/hi';
import { ElevaLogo } from 'assets';
import { Search, HeaderNavbar, HeaderCartIcon } from 'components';
import styleVars from 'styleVars.js';
import { IconProvider } from 'context';
import Image from 'next/image';
import IconWrapper from 'components/IconWrapper';
import { CiUser } from 'assets/react-icons';
import { HiMenu } from 'assets/react-icons';
import Link from 'next/link';

// async function exportServerWrapper(component) {
//   'use server';
//   return component;
// }

function Header() {
  return (
    <header>
      <div
        className="grid grid-cols-[1fr_minmax(max-content,_60%)_1fr]
           grid-rows-[repeat(2,_max-content)] items-center
            gap-y-2 px-3 pb-2 pt-1 md:gap-y-2 md:px-12 md:pt-5"
      >
        <div className="block md:hidden">
          <IconProvider
            value={{
              style: { strokeWidth: '0.05rem', stroke: styleVars.colors.text },
              size: '1.5rem',
            }}
          >
            <HiMenu />
          </IconProvider>
        </div>
        <Link
          href={'/'}
          className="w-28 justify-self-center md:justify-self-start"
        >
          <Image
            src={ElevaLogo}
            alt="Eleva Design Logo"
            // className="w-28 justify-self-center md:justify-self-start"
            draggable={false}
          />
        </Link>
        <div className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
          <Search />
        </div>
        <div className="flex items-center justify-end gap-2">
          <button>
            <IconProvider
              value={{
                style: {
                  strokeWidth: '0.05rem',
                  stroke: styleVars.colors.text,
                },
                size: '1.5rem',
              }}
            >
              <CiUser />
            </IconProvider>
          </button>
          <HeaderCartIcon />
        </div>
        <div className="col-span-full row-start-2 hidden border-t-[1px] border-t-primary-700 md:block md:py-2">
          <HeaderNavbar />
        </div>
      </div>
    </header>
  );
}
export default Header;
