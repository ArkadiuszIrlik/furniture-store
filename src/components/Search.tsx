'use client';

import { useSearchParams } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';
import { IconProvider } from 'context';
import { useEffect, useState } from 'react';

function Search() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q');

  const [searchBoxValue, setSearchBoxValue] = useState(searchQuery || '');
  useEffect(() => {
    setSearchBoxValue(searchQuery || '');
  }, [searchQuery]);

  function handleSearchValueChange(nextValue: string) {
    setSearchBoxValue(nextValue);
  }
  return (
    <div className="relative flex items-center justify-start">
      <div className="hidden w-full sm:block">
        <form role="search" action="/search" method="get" id="desktop-search">
          <input
            type="search"
            name="q"
            id="site-search-desktop"
            value={searchBoxValue}
            onChange={(e) => handleSearchValueChange(e.currentTarget.value)}
            className="w-full rounded-xl border-2 border-primary-700 py-2 pl-9
               pr-4 font-open-sans placeholder:text-primary-800 focus:border-black
               focus:ring-0"
            placeholder="Search for rugs, armoires and more"
            aria-label="Search for products"
            aria-required
            required
            autoComplete="off"
            autoCapitalize="off"
          />
        </form>
      </div>
      <div className="block w-full sm:hidden">
        <form role="search" action="/search" method="get" id="mobile-search">
          <input
            type="search"
            name="q"
            id="site-search-mobile"
            value={searchBoxValue}
            onChange={(e) => handleSearchValueChange(e.currentTarget.value)}
            className="w-full rounded-xl border-2 border-primary-700 py-2 pl-9
             pr-4 font-open-sans placeholder:text-primary-800 focus:border-black
             focus:ring-0"
            placeholder="Search"
            aria-label="Search for products"
            aria-required
            required
            autoComplete="off"
            autoCapitalize="off"
          />
        </form>
      </div>
      <button
        type="submit"
        form="desktop-search"
        className="absolute left-3"
        aria-label="Submit search"
      >
        <IconProvider value={{ size: '1.2rem' }}>
          <BiSearch />
        </IconProvider>
      </button>
    </div>
  );
}
export default Search;
