import { SearchFilterSidebar, PrimaryButton } from 'components';
import { SearchFacetActive } from './SearchFilterSidebar';

function SearchFilterModal({
  isAnimated,
  facetList,
  onToggleFilterValue,
  onClose,
}: {
  isAnimated: boolean;
  facetList: SearchFacetActive[];
  onToggleFilterValue: (facet: SearchFacetActive, valueName: string) => void;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed bottom-0 left-0 top-0 z-50 flex flex-col bg-white ${
        isAnimated ? 'animate-[slide-in_0.4s_ease-out]' : ''
      } min-w-[250px]`}
    >
      <div
        className="left-0 right-0 top-0 flex
               items-center justify-between bg-primary-700 px-2 py-1"
      >
        <p className="font-dm-sans text-2xl font-bold text-white">FILTER</p>
        <button type="button" aria-label="hide filter" onClick={onClose}>
          <IconContext.Provider
            value={{
              style: {
                strokeWidth: '0.05rem',
              },
              size: '1.3rem',
              //stroke?
              className: 'fill-white',
            }}
          >
            <IoClose />
          </IconContext.Provider>
        </button>
      </div>
      <SearchFilterSidebar
        facetList={facetList}
        onToggleFilterValue={onToggleFilterValue}
      />
      <div
        className="mt-auto flex justify-center gap-2 bg-white px-2 py-4
          text-lg"
      >
        <PrimaryButton isFilled="false" type="button">
          Reset
        </PrimaryButton>
        <PrimaryButton type="button">Apply</PrimaryButton>
      </div>
    </div>
  );
}
export default SearchFilterModal;
