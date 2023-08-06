'use client';

import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BiFilter } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import resolveConfig from 'tailwindcss/resolveConfig';
import {
  SearchFilterSidebar,
  RecommendedCard,
  ModalOverlay,
  SearchFilterModal,
  PathDisplay,
} from 'components';
import tailwindConfig from '../../../tailwind.config';
import { useMediaQuery } from '../../hooks';
import { v4 as uuidv4 } from 'uuid';
import { Path } from 'components/PathDisplay';

function Category() {
  const fullConfig = resolveConfig(tailwindConfig);
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  const productList: any[] = [...Array(12)];

  const [isFilterShown, setIsFilterShown] = useState(!!mediumMatches);
  const [animateFilter, setAnimateFilter] = useState(false);

  const pathToCategory: Path = [{ name: 'Vases' }];

  useEffect(() => {
    if (!mediumMatches && isFilterShown) {
      setIsFilterShown(false);
    }
  }, [mediumMatches]);

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
      id: uuidv4(),
      name: 'Color',
      values: [
        { name: 'Black', id: uuidv4(), isActive: false },
        { name: 'Beige', id: uuidv4(), isActive: false },
      ],
    },
    {
      id: uuidv4(),
      name: 'Material',
      values: [
        {
          name: 'Reallylongnamehere',
          id: uuidv4(),
          isActive: false,
        },
        { name: 'Sandalwood', id: uuidv4(), isActive: false },
        { name: 'Aak', id: uuidv4(), isActive: false },
      ],
    },
    {
      id: uuidv4(),
      name: 'Material',
      values: [
        { name: 'ZOak', id: uuidv4(), isActive: false },
        { name: 'AA', id: uuidv4(), isActive: false },
        { name: 'Aak', id: uuidv4(), isActive: false },
      ],
    },
  ]);

  return (
    <div className="px-3 md:px-12">
      <div className="border-b-[1px] border-b-primary-700 pb-2">
        <PathDisplay pathArray={pathToCategory} />
        <h2 className="text-3xl font-medium">VASES</h2>
      </div>
      <div className="flex gap-5 overflow-hidden pt-2">
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
        <div className="flex flex-auto flex-col">
          <div className="flex items-center justify-between pb-3">
            <button
              type="button"
              className="flex items-center font-open-sans"
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
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] gap-3 lg:grid-cols-4">
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
