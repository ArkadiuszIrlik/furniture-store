import { useState } from 'react';
import { SearchFilterSidebar } from '../../components';

function Category() {
  function handleFacetToggle(facet, value) {
    // find facet in list of facets, then find value and set value to !currentValue
    
    setFacets(...facets, {facet.values})
  }
  const [facets, setFacets] = useState([
    {
      name: 'Color',
      values: [
        { name: 'Black', isActive: false },
        { name: 'Beige', isActive: false },
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
