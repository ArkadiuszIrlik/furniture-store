import { IconProvider } from 'context';
import { SearchFilterModal, ModalOverlay, RecommendedCard } from 'components';
import { BiFilter } from 'assets/react-icons';
import { SearchFacetActive } from 'components/SearchFilterSidebar';
import { Products } from 'models';
import SortSelector from './SortSelector';

function BrowserItemsMobile({
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
      {isFilterShown && (
        <>
          <SearchFilterModal
            isAnimated={isFilterAnimated}
            facetList={filterFacetList}
            onToggleFilterValue={onToggleFilterValue}
            onClose={onToggleFilterVisibility}
          />
          <ModalOverlay onOverlayClick={onToggleFilterVisibility} />
        </>
      )}
      <div className="flex flex-auto flex-col">
        <div className="flex items-start justify-between gap-16 px-1 pb-3">
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
            Filter
          </button>
          <SortSelector />
        </div>
        {productList?.length === 0 ? (
          <p className="text-md mx-auto mt-[10vh] font-open-sans">
            Sorry, we couldn&apos;t find any results.
          </p>
        ) : (
          <>
            {/* <div className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-3 lg:grid-cols-4"> */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
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
export default BrowserItemsMobile;
