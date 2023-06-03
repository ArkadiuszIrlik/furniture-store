import { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiFilter } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import resolveConfig from 'tailwindcss/resolveConfig';
import {
  SearchFilterSidebar,
  RecommendedCard,
  ModalOverlay,
  SearchFilterModal,
} from '../../components';
import tailwindConfig from '../../../tailwind.config';
import { useMediaQuery } from '../../hooks';

function Category() {
  const fullConfig = resolveConfig(tailwindConfig);
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  const productList: any[] = [...Array(12)];

  const [isFilterShown, setIsFilterShown] = useState(true);
  const [animateFilter, setAnimateFilter] = useState(false);

  function handleToggleFilterVisibility() {
    setAnimateFilter(true);
    setIsFilterShown(!isFilterShown);
  }

  function handleFacetToggle(facet, value) {
    setFacets(
      facets.map((item) => {
        if (item.id === facet.id) {
          return {
            ...item,
            values: item.values.map((el) => {
              if (el.id === value.id) {
                return { ...el, isActive: !el.isActive };
              }
              return el;
            }),
          };
        }
        return item;
      })
    );
  }
  const [facets, setFacets] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Color',
      values: [
        { name: 'Black', id: crypto.randomUUID(), isActive: false },
        { name: 'Beige', id: crypto.randomUUID(), isActive: false },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: 'Material',
      values: [
        {
          name: 'Reallylongnamehere',
          id: crypto.randomUUID(),
          isActive: false,
        },
        { name: 'Sandalwood', id: crypto.randomUUID(), isActive: false },
        { name: 'Aak', id: crypto.randomUUID(), isActive: false },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: 'Material',
      values: [
        { name: 'ZOak', id: crypto.randomUUID(), isActive: false },
        { name: 'AA', id: crypto.randomUUID(), isActive: false },
        { name: 'Aak', id: crypto.randomUUID(), isActive: false },
      ],
    },
  ]);

  return (
    <div className="md:mx-[10%] px-3">
      <div className="border-b-[1px] border-b-primary-700 pb-2">
        <p className="font-dm-sans font-bold text-base text-primary-700">
          <a href="" className="hover:text-accents-700">
            Home
          </a>{' '}
          /{' '}
          <a href="" className="hover:text-accents-700">
            Vases
          </a>
        </p>
        <h2 className="text-3xl font-medium">VASES</h2>
      </div>
      <div className="overflow-hidden flex gap-5 pt-2">
        {isFilterShown &&
          (mediumMatches ? (
            <div
              className={`${
                animateFilter ? 'animate-[slide-in_0.4s_ease-out]' : ''
              }`}
            >
              <SearchFilterSidebar
                facetList={facets}
                onToggleFilterValue={handleFacetToggle}
              />
            </div>
          ) : (
            <>
              <SearchFilterModal
                isAnimated={animateFilter}
                facetList={facets}
                onToggleFilterValue={handleFacetToggle}
                onClose={handleToggleFilterVisibility}
              />
              <ModalOverlay onOverlayClick={handleToggleFilterVisibility} />
            </>
          ))}
        <div className="flex flex-col flex-auto">
          <div className="flex justify-between items-center pb-3">
            <button
              type="button"
              className="font-open-sans flex items-center"
              onClick={handleToggleFilterVisibility}
            >
              <IconContext.Provider
                value={{
                  style: {
                    strokeWidth: '0.05rem',
                  },
                  size: '1.7rem',
                  className: 'fill-text stroke-text',
                }}
              >
                <BiFilter />
              </IconContext.Provider>
              {isFilterShown ? 'Hide Filters' : 'Show Filters'}
            </button>
            <div className="flex gap-2">
              <p className="font-bold">Sort By:</p>
              <div className="flex items-center gap-1">
                <p>Recommended</p>
                <AiFillCaretDown />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] lg:grid-cols-4 gap-3">
            {productList.map((product) => {
              return <RecommendedCard />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
