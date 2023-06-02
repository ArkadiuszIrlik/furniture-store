import { IoClose } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { SearchFilterSidebar } from '.';

function SearchFilterModal({
  isAnimated,
  facetList,
  onToggleFilterValue,
  onClose,
}) {
  return (
    <div
      className={`fixed z-50 top-0 left-0 bottom-0 flex flex-col bg-white ${
        isAnimated ? 'animate-[slide-in_0.4s_ease-out]' : ''
      } min-w-[250px]`}
    >
      <div
        className="bg-primary-700 flex justify-between items-center
               px-2 py-1 top-0 left-0 right-0"
      >
        <p className="font-dm-sans font-bold text-2xl text-white">FILTER</p>
        <button type="button" aria-label="hide filter" onClick={onClose}>
          <IconContext.Provider
            value={{
              style: {
                strokeWidth: '0.05rem',
              },
              size: '1.3rem',
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
        className="flex justify-center gap-2 bottom-0 left-0 right-0
               bg-white mt-auto px-2 py-4"
      >
        <button
          type="button"
          className="rounded-lg border-2 border-primary-700
                 text-primary-700 font-dm-sans font-medium
                 px-2 py-1 flex-auto"
        >
          Reset
        </button>
        <button
          type="button"
          className="rounded-lg border-2 border-primary-700 bg-primary-700
                 text-white font-dm-sans font-medium
                 px-2 py-1 flex-auto"
          onClick={onClose}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
export default SearchFilterModal;
