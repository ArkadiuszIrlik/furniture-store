import { BsPlusLg } from 'assets/react-icons';
// import { IconContext } from 'react-icons';
import { IconProvider } from 'context';

export interface SearchFacet {
  name: string;
  values: Array<{ name: string; isActive: boolean }>;
}

function SearchFilterSidebar({ facetList, onToggleFilterValue }) {
  return (
    <div className="h-full max-w-xs overflow-y-auto px-2 md:px-0">
      {facetList.map((facet) => {
        return (
          <div key={facet.id}>
            <div
              className="flex items-center justify-between gap-5 border-b-[1px]
            border-b-primary-700
             py-1 md:pb-1 md:pr-1"
            >
              <p className="font-dm-sans text-xl">{facet.name.toUpperCase()}</p>
              <IconProvider
                value={{
                  style: { strokeWidth: '0.05rem' },
                  className: 'text-primary-700',
                  // size: '1.2rem',
                }}
              >
                <BsPlusLg />
              </IconProvider>
            </div>
            <div className="grid grid-cols-2 gap-2 py-2 md:mb-1 md:block md:pr-6">
              {[...facet.values]
                .sort((a, b) => {
                  const nameA = a.name.toUpperCase();
                  const nameB = b.name.toUpperCase();
                  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
                })
                .map((value) => {
                  return (
                    <div
                      key={value.id}
                      className="flex items-center gap-1 md:px-0"
                    >
                      <input
                        type="checkbox"
                        checked={value.isActive}
                        onChange={() => {
                          onToggleFilterValue(facet, value);
                        }}
                        name=""
                        id={`checkbox-filter-${value.id}`}
                        className="
                          cursor-pointer
                          rounded
                          border-gray-300
                          text-primary-700
                          shadow-sm
                          focus:border-primary-700
                          focus:ring
                          focus:ring-primary-300
                          focus:ring-opacity-50
                          focus:ring-offset-0
                        "
                      />
                      <label
                        htmlFor={`checkbox-filter-${value.id}`}
                        className="min-w-0 cursor-pointer break-words
                        font-open-sans text-base"
                      >
                        {value.name}
                      </label>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SearchFilterSidebar;
