import { BsPlusLg } from 'react-icons/bs';
import { IconContext } from 'react-icons';

function SearchFilterSidebar({ facetList, onToggleFilterValue }) {
  return (
    <div className="max-w-xs px-2 md:px-0 overflow-y-auto h-full">
      {facetList.map((facet) => {
        return (
          <div key={facet.id}>
            <div
              className="flex justify-between items-center border-b-[1px] border-b-primary-700
            py-1
             md:pr-1 md:pb-1 gap-5"
            >
              <p className="text-xl font-dm-sans">{facet.name.toUpperCase()}</p>
              <IconContext.Provider
                value={{
                  style: { strokeWidth: '0.05rem' },
                  className: 'text-primary-700',
                  // size: '1.2rem',
                }}
              >
                <BsPlusLg />
              </IconContext.Provider>
            </div>
            <div className="py-2 md:pr-6 md:mb-1 grid grid-cols-2 gap-2 md:block">
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
                          focus:ring-offset-0
                          focus:ring-primary-300
                          focus:ring-opacity-50
                        "
                      />
                      <label
                        htmlFor={`checkbox-filter-${value.id}`}
                        className="cursor-pointer font-open-sans text-base
                        break-words min-w-0"
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
