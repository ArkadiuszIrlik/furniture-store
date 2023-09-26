'use client';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'hooks';
import styleVars from 'styleVars';
import {
  SearchFilterSidebar,
  SearchFilterModal,
  ModalOverlay,
  RecommendedCard,
} from 'components';
import { IconContext } from 'react-icons';
import { BiFilter } from 'react-icons/bi';
import { Products } from 'models/Products';
import { SearchFacet } from 'components/SearchFilterSidebar';
import { AiFillCaretDown } from 'react-icons/ai';
import { SearchFacetActive } from 'components/SearchFilterSidebar';

function BrowseItems({
  productList,
  facetList,
}: {
  productList: Products[];
  facetList: SearchFacet[];
}) {
  const mediumScreen = styleVars.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  const [isFilterShown, setIsFilterShown] = useState(!!mediumMatches);
  const [animateFilter, setAnimateFilter] = useState(false);
  const [facets, setFacets] = useState<SearchFacetActive[]>([]);

  useEffect(() => {
    if (!mediumMatches && isFilterShown) {
      setIsFilterShown(false);
    }
  }, [mediumMatches]);

  useEffect(() => {
    const nextFacets: SearchFacetActive[] = facetList.map((facet) => {
      return {
        name: facet.name,
        values: facet.values.map((value) => {
          return {
            name: value.name,
            count: value.count,
            isActive: false,
          };
        }),
      };
    });
    setFacets(nextFacets);
  }, [facetList]);

  function handleToggleFilterVisibility() {
    setAnimateFilter(true);
    setIsFilterShown(!isFilterShown);
  }

  function handleFacetToggle(facet: SearchFacetActive, valueName: string) {
    setFacets(
      facets.map((item) => {
        if (item.name === facet.name) {
          return {
            ...item,
            values: item.values.map((el) => {
              if (el.name === valueName) {
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
  return (
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
          {productList.length !== 0 ? (
            productList.map((product) => {
              return (
                <RecommendedCard
                  name={product.name}
                  priceUsd={1234}
                  image={product.images[0]}
                  key={product._id}
                />
              );
            })
          ) : (
            <p className="mx-auto mt-[10vh] font-open-sans text-lg">
              Sorry, we couldn't find any results.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default BrowseItems;