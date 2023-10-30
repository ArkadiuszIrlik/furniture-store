import { IconProvider } from 'context';
import { SearchFilterSidebar, RecommendedCard } from 'components';
import { BiFilter } from 'assets/react-icons';
import { Products } from 'models';
import { SearchFacetActive } from 'components/SearchFilterSidebar';
import SortSelector from './SortSelector';

function BrowseItemsLarge({
  isSkeleton = false,
  productList,
  filterFacetList,
  resultsPerPage,
  totalResults,
  isFilterShown,
  isFilterAnimated,
  onToggleFilterVisibility,
  onToggleFilterValue,
}: {
  isSkeleton: boolean;
  productList: Products[];
  filterFacetList: SearchFacetActive[];
  resultsPerPage: number;
  totalResults: number;
  isFilterShown: boolean;
  isFilterAnimated: boolean;
  onToggleFilterVisibility: () => void;
  onToggleFilterValue: (facet: SearchFacetActive, valueName: string) => void;
}) {
  return (
    <div className="flex gap-5 overflow-hidden pt-2">
      {(isFilterShown || isSkeleton) && (
        <div
          className={`${
            isFilterAnimated ? 'animate-[slide-in_0.4s_ease-out]' : ''
          }`}
        >
          {/* <SearchFilterSidebar
            isSkeleton={isSkeleton}
            facetList={filterFacetList}
            onToggleFilterValue={onToggleFilterValue}
          /> */}
          {isSkeleton ? (
            <SearchFilterSidebar isSkeleton />
          ) : (
            filterFacetList &&
            onToggleFilterValue && (
              <SearchFilterSidebar
                isSkeleton={false}
                facetList={filterFacetList}
                onToggleFilterValue={onToggleFilterValue}
              />
            )
          )}
        </div>
      )}
      <div className="flex flex-auto flex-col">
        <div className="flex items-center justify-between pb-3">
          <button
            type="button"
            className="flex items-center font-open-sans"
            onClick={onToggleFilterVisibility}
          >
            <IconProvider
              value={{
                style: {
                  strokeWidth: '0.05rem',
                },
                size: '1.7rem',
                className: 'fill-text stroke-text',
              }}
            >
              <BiFilter />
            </IconProvider>
            {isFilterShown ? 'Hide Filters' : 'Show Filters'}
          </button>
          <SortSelector />
        </div>
        {productList?.length === 0 ? (
          <p className="mx-auto mt-[10vh] font-open-sans text-lg">
            Sorry, we couldn&apos;t find any results.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(13rem,_1fr))] gap-3 lg:grid-cols-4">
              {productList !== undefined
                ? productList.map((product) => {
                    return (
                      <RecommendedCard
                        isSkeleton={false}
                        name={product.name}
                        priceUsd={product.priceUsd}
                        image={product.images[0]}
                        key={product._id}
                      />
                    );
                  })
                : [...Array(6)].map((el, i) => (
                    <RecommendedCard isSkeleton key={i} />
                  ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default BrowseItemsLarge;
