import { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiFilter } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import { SearchFilterSidebar, RecommendedCard } from '../../components';

function Category() {
  const productList: any[] = [...Array(12)];

  function handleFacetToggle(facet, value) {
    // find facet in list of facets, then find value and set value to !currentValue
    // const nextFacet = facets.find( item => item.id === facet.id);
    // const nextValue = editedFacet?.values.find( item => item.id === value.id);
    // nextValue?.isActive = !nextValue?.isActive;
    // nextFacet.values = [...nextFacet?.values, nextValue]
    setFacets(
      facets.map((item) => {
        if (item.id === facet.id) {
          return {
            ...item,
            values: item.values.map((el) => {
              if (el.id === value.id) {
                return { ...el, isActive: !el.isActive };
              }
              return el;
            }),
          };
        }
        return item;
      })
    );
    // setFacets(...facets, editedFacet)
    // setFacets(...facets, {facet.values})
  }
  const [facets, setFacets] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Color',
      values: [
        { name: 'Black', id: crypto.randomUUID(), isActive: false },
        { name: 'Beige', id: crypto.randomUUID(), isActive: false },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: 'Material',
      values: [
        { name: 'ZOak', id: crypto.randomUUID(), isActive: false },
        { name: 'Sandalwood', id: crypto.randomUUID(), isActive: false },
        { name: 'Aak', id: crypto.randomUUID(), isActive: false },
      ],
    },
  ]);

  return (
    <div className="md:mx-[10%] px-3">
      <div className="border-b-[1px] border-b-primary-700 pb-2">
        <p className="font-dm-sans font-bold text-base text-primary-700">
          <a href="" className="hover:text-accents-700">
            Home
          </a>{' '}
          /{' '}
          <a href="" className="hover:text-accents-700">
            Vases
          </a>
        </p>
        <h2 className="text-3xl font-medium">VASES</h2>
      </div>
      <div className="overflow-hidden flex gap-5 pt-2">
        <SearchFilterSidebar
          facetList={facets}
          onToggleFacet={handleFacetToggle}
        />
        <div className="flex flex-col flex-auto">
          <div className="flex justify-between items-center pb-3">
            <div className="flex items-center">
              <IconContext.Provider
                value={{
                  style: {
                    strokeWidth: '0.05rem',
                  },
                  size: '1.7rem',
                }}
              >
                <BiFilter />
              </IconContext.Provider>
              <p className="font-open-sans">Hide Filters</p>
            </div>
            {/* <div className="flex gap-2 rounded-lg border-primary-700 border-[1px] px-2 py-1"> */}
            <div className="flex gap-2">
              <p className="font-bold">Sort By:</p>
              <div className="flex items-center gap-1">
                <p>Recommended</p>
                <AiFillCaretDown />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] lg:grid-cols-4 gap-3">
            {productList.map((product) => {
              return <RecommendedCard />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
