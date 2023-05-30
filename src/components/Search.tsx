import { BiSearch } from 'react-icons/bi';
import resolveConfig from 'tailwindcss/resolveConfig';
import { IconContext } from 'react-icons';
import { useMediaQuery } from '../hooks';
import tailwindConfig from '../../tailwind.config';

function Search() {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const smallMatches = useMediaQuery(`(min-width: ${smallScreen})`);

  return (
    <div className="relative flex justify-start items-center w-full">
      <input
        type="search"
        name="site-search"
        id="site-search"
        className="border-primary-700 border-2 rounded-xl py-2 pl-9 pr-4
           placeholder:text-primary-800 font-open-sans w-full focus:default"
        placeholder={
          smallMatches ? 'Search for rugs, armoires and more' : 'Search'
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
