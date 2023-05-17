import { BiSearch } from 'react-icons/bi';
import { useEffect } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

function Search() {
  return (
    <div className="relative flex justify-start items-center">
      <input
        type="search"
        name="site-search"
        id="site-search"
        className="bg-primary-300 rounded-xl py-2 pl-8 pr-4 placeholder:text-primary-800 placeholder:font-open-sans"
        placeholder="Search for rugs, armoires and more"
      />

      <div className="absolute left-2">
        <BiSearch />
      </div>
    </div>
  );
}
export default Search;
