import { BsPlusLg } from 'react-icons/bs';
import { IconContext } from 'react-icons';

function SearchFilterSidebar({ facetList, onToggleFacet }) {
  return (
    <div className="max-w-xs">
      {facetList.map((facet) => {
        return (
          <div>
            <div className="flex justify-between items-center border-b-[1px] border-b-primary-700 pr-1 py-1">
              <p className="text-xl font-dm-sans">{facet.name.toUpperCase()}</p>
              {/* <p> */}
              <IconContext.Provider
                value={{
                  style: { strokeWidth: '0.05rem' },
                  className: 'text-primary-700',
                  // size: '1.2rem',
                }}
              >
                <BsPlusLg />
              </IconContext.Provider>
              {/* </p> */}
            </div>
            <div>
              {facet.values.map((value) => {
                return (
                  <div className="flex">
                    <input
                      type="checkbox"
                      checked={value.isActive}
                      onChange={() => {
                        onToggleFacet(facet, value);
                      }}
                      name=""
                      id=""
                    />
                    <p>{value.name}</p>
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
