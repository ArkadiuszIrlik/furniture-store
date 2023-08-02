'use client';

import { BiSearch } from 'react-icons/bi';
import { IconProvider } from 'context';

function Search() {
  return (
    <div className="relative flex items-center justify-start">
      <div className="hidden w-full sm:block">
        <input
          type="search"
          name="site-search"
          id="site-search"
          className="w-full rounded-xl border-2 border-primary-700 py-2 pl-9
             pr-4 font-open-sans placeholder:text-primary-800 focus:border-black
             focus:ring-0"
          placeholder={'Search for rugs, armoires and more'}
        />
      </div>
      <div className="block w-full sm:hidden">
        <input
          type="search"
          name="site-search"
          id="site-search"
          className="w-full rounded-xl border-2 border-primary-700 py-2 pl-9
             pr-4 font-open-sans placeholder:text-primary-800 focus:border-black
             focus:ring-0"
          placeholder={'Search'}
        />
      </div>
      <div className="absolute left-3">
        <IconProvider value={{ size: '1.2rem' }}>
          <BiSearch />
        </IconProvider>
      </div>
    </div>
  );
}
export default Search;
