import { CiUser } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import resolveConfig from 'tailwindcss/resolveConfig';
import { ElevaLogo } from '../../assets';
import tailwindConfig from '../../../tailwind.config';
import { Search, HeaderNavbar } from '../../components';

function Header() {
  const fullConfig = resolveConfig(tailwindConfig);
  const textColor = fullConfig.theme.colors.text;

  return (
    <div
      className="grid grid-cols-[1fr_minmax(max-content,_60%)_1fr]
         grid-rows-[repeat(2,_max-content)] md:mx-[10%] items-center
          py-2 px-3 gap-y-4"
    >
      <img src={ElevaLogo} alt="Eleva Design Logo" srcSet="" />
      <Search />
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
      <div className="col-span-full row-start-2 ">
        <HeaderNavbar />
      </div>
    </div>
  );
}
export default Header;
