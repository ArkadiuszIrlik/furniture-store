'use client';

import { useEffect, useState } from 'react';
import { useClientCheck, useMediaQuery } from 'hooks';
import styleVars from 'styleVars';
import { Products } from 'models/Products';
import { BrowseItemsLarge, BrowseItemsMobile } from 'components/BrowseItems';

function BrowseItems({
  isSkeleton = false,
  productList,
  facetList,
}: {
  productList: Products[];
  facetList: SearchFacet[];
}) {
  const mediumScreen = styleVars.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  const [isFilterShown, setIsFilterShown] = useState(mediumMatches);
  const [animateFilter, setAnimateFilter] = useState(false);
  const [facets, setFacets] = useState<SearchFacetActive[]>([]);

  useEffect(() => {
    if (!mediumMatches && isFilterShown) {
      setIsFilterShown(false);
    }
  }, [mediumMatches]);

  useEffect(() => {
    if (facetList === undefined) {
      return;
    }
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

  const isClient = useClientCheck();
  return (
    <>
      {(() => {
        if (isSkeleton) {
          return (
            <>
              <div className="hidden md:block">
                <BrowseItemsLarge
                  isSkeleton
                  productList={productList}
                  filterFacetList={facets}
                  isFilterShown={isFilterShown}
                  isFilterAnimated={animateFilter}
                  onToggleFilterVisibility={handleToggleFilterVisibility}
                  onToggleFilterValue={handleFacetToggle}
                />
              </div>
              <div className="block md:hidden">
                <BrowseItemsMobile
                  isSkeleton
                  productList={productList}
                  filterFacetList={facets}
                  isFilterShown={isFilterShown}
                  isFilterAnimated={animateFilter}
                  onToggleFilterVisibility={handleToggleFilterVisibility}
                  onToggleFilterValue={handleFacetToggle}
                />
              </div>
            </>
          );
        }
        if (isClient) {
          return mediumMatches ? (
            <BrowseItemsLarge
              productList={productList}
              filterFacetList={facets}
              resultsPerPage={resultsPerPage}
              totalResults={totalResults}
              isFilterShown={isFilterShown}
              isFilterAnimated={animateFilter}
              onToggleFilterVisibility={handleToggleFilterVisibility}
              onToggleFilterValue={handleFacetToggle}
            />
          ) : (
            <BrowseItemsMobile
              productList={productList}
              filterFacetList={facets}
              resultsPerPage={resultsPerPage}
              totalResults={totalResults}
              isFilterShown={isFilterShown}
              isFilterAnimated={animateFilter}
              onToggleFilterVisibility={handleToggleFilterVisibility}
              onToggleFilterValue={handleFacetToggle}
            />
          );
        }
        return null;
      })()}
    </>
  );
}
export default BrowseItems;
