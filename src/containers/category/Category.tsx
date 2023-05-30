import { useState } from 'react';
import { SearchFilterSidebar } from '../../components';

function Category() {
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
      <SearchFilterSidebar
        facetList={facets}
        onToggleFacet={handleFacetToggle}
      />
    </div>
  );
}
export default Category;
