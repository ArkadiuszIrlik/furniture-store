'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { IconProvider } from 'context';

function SortSelector() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [sortValue, setSortValue] = useState(searchParams.get('sort'));

  useEffect(() => {
    setSortValue(searchParams.get('sort'));
  }, [searchParams]);

  const sortValuePretty = {
    recommended: 'Recommended',
    price_asc: 'Price: Low to High',
    price_desc: 'Price: High to Low',
    review: 'Avg. Review Score',
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  function handleChangeSortType(sortType: string) {
    setSortValue(sortType);
    router.push(`${pathname}?${createQueryString('sort', sortType)}`);
  }
  return (
    <div className="ml-auto flex flex-wrap items-center justify-end gap-x-1 pr-1">
      <label htmlFor="product-sort-select" className="font-bold">
        Sort By:
      </label>
      <div
        className="relative focus-within:border-black focus-within:outline focus-within:outline-2
         focus-within:outline-offset-0 focus-within:outline-black"
      >
        <select
          name="product-sort-select"
          id="product-sort-select"
          className="absolute bottom-0 left-0 right-0 top-0 z-0 truncate rounded-sm border-0 bg-transparent p-1
            pr-2 opacity-0 outline-black focus:outline focus:outline-2
             focus:-outline-offset-2 focus:outline-black focus:ring-0 focus:ring-offset-0
            "
          value={sortValue || 'recommended'}
          onChange={(e) => {
            handleChangeSortType(e.currentTarget.value);
          }}
        >
          <option value="recommended">Recommended</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="review">Avg. Review Score</option>
        </select>
        <p
          className="pointer-events-none relative bottom-0 left-0 right-0 top-0 z-10 flex items-center gap-1 bg-white text-right"
          aria-hidden
        >
          {sortValuePretty[sortValue] || 'Recommended'}
          <IconProvider
            value={{
              className: 'fill-text stroke-text',
            }}
          >
            <AiFillCaretDown />
          </IconProvider>
        </p>
      </div>
    </div>
  );
}
export default SortSelector;
