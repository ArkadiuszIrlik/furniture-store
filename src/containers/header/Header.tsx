import { CiUser } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { HiMenu } from 'react-icons/hi';
import resolveConfig from 'tailwindcss/resolveConfig';
import { ElevaLogo } from '../../assets';
import tailwindConfig from '../../../tailwind.config';
import { Search, HeaderNavbar } from '../../components';
import { useMediaQuery } from '../../hooks';

function Header() {
  const fullConfig = resolveConfig(tailwindConfig);
  const textColor = fullConfig.theme.colors.text;
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  return (
    <div
      className="grid grid-cols-[1fr_minmax(max-content,_60%)_1fr]
         grid-rows-[repeat(2,_max-content)] md:mx-[10%] items-center
          py-4 px-3 gap-y-4"
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
        <IconContext.Provider
          value={{
            style: { strokeWidth: '0.05rem', stroke: textColor },
            size: '1.5rem',
          }}
        >
          <CiUser />
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            style: { strokeWidth: '0.1rem', stroke: textColor },
            size: '1.5rem',
          }}
        >
          <FiShoppingCart />
        </IconContext.Provider>
      </div>
      {mediumMatches && (
        <div className="col-span-full row-start-2 ">
          <HeaderNavbar />
        </div>
      )}
    </div>
  );
}
export default Header;
