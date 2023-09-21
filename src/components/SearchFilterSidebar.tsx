import { BsPlusLg } from 'assets/react-icons';
import { IconProvider } from 'context';
import { capitalizeEachWord } from 'helpers';
import { v4 as uuidv4 } from 'uuid';

export interface SearchFacet {
  name: string;
  values: Array<{ name: string; count?: number }>;
}

export interface SearchFacetActive extends SearchFacet {
  values: SearchFacet['values'] &
    Array<{
      isActive: boolean;
    }>;
}

function SearchFilterSidebar({
  facetList,
  onToggleFilterValue,
}: {
  facetList: SearchFacetActive[];
  onToggleFilterValue: (facet: SearchFacetActive, valueName: string) => void;
}) {
  return (
    <div className="h-full max-w-xs overflow-y-auto px-2 md:px-0">
      {facetList.map((facet) => {
        return (
          <div key={facet.name}>
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
                  const tempId = uuidv4();
                  return (
                    <div
                      key={value.name}
                      className="flex items-center gap-1 md:mb-2 md:px-0"
                    >
                      <input
                        type="checkbox"
                        checked={value.isActive}
                        onChange={() => {
                          onToggleFilterValue(facet, value.name);
                        }}
                        name=""
                        id={`checkbox-filter-${tempId}`}
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
                        htmlFor={`checkbox-filter-${tempId}`}
                        className="min-w-0 cursor-pointer select-none
                        break-words font-open-sans text-base leading-5"
                      >
                        {capitalizeEachWord(value.name)}
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
