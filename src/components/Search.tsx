import { BiSearch } from 'react-icons/bi';
import resolveConfig from 'tailwindcss/resolveConfig';
import { IconContext } from 'react-icons';
import { useMediaQuery } from '../hooks';
import tailwindConfig from '../../tailwind.config';

function Search() {
  const fullConfig = resolveConfig(tailwindConfig);
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  return (
    <div className="relative flex justify-start items-center w-full">
      <input
        type="search"
        name="site-search"
        id="site-search"
        className="bg-primary-300 rounded-xl py-2 pl-9 pr-4 placeholder:text-primary-800 font-open-sans w-full"
        placeholder={
          mediumMatches ? 'Search for rugs, armoires and more' : 'Search'
        }
      />
      <div className="absolute left-3">
        <IconContext.Provider value={{ size: '1.2rem' }}>
          <BiSearch />
        </IconContext.Provider>
      </div>
    </div>
  );
}
export default Search;
