import { connectToDb } from 'helpers';
import { Product } from 'models';
import { RecommendedCard } from 'components';
import { Products } from 'models/Products';
import BrowseItems from 'containers/browseItems/BrowseItems';
import { SearchFacet } from 'components/SearchFilterSidebar';

export interface SearchPageParams {
  q: string;
}

async function searchQuery(query: string) {
  try {
    await connectToDb();
    const results = await Product.aggregate([
      {
        $search: {
          index: 'eleva-facet-search',
          facet: {
            operator: {
              compound: {
                should: [
                  {
                    text: {
                      path: 'name',
                      query: query,
                    },
                  },
                  {
                    text: {
                      path: 'color',
                      query: query,
                    },
                  },
                  // {
                  //   text: {
                  //     path: { wildcard: "*" },
                  //     query: query,
                  //   },
                  // },
                ],
              },
            },
            facets: {
              colors: {
                type: 'string',
                path: 'color',
              },
            },
          },
        },
      },
      {
        $facet: {
          results: [
            { $limit: 10 },
            {
              $addFields: {
                _id: { $toString: '$_id' },
              },
            },
            {
              $unset: 'details._id',
            },
          ],
          meta: [{ $limit: 1 }, { $replaceWith: '$$SEARCH_META' }],
        },
      },
      { $unwind: '$meta' },
    ]);
    console.log(results);
    if (results.length === 0) {
      return {
        results: [],
        meta: {
          count: {
            lowerBound: 0,
          },
          facet: [],
        },
      };
    } else {
      return results[0];
    }
  } catch (error) {
    throw error;
  }
}

async function Page({ searchParams }: { searchParams: SearchPageParams }) {
  let hasResults = false;
  let foundItems: Products[] = [];
  let foundFacets: SearchFacet[] = [];
  if (searchParams.q) {
    const searchResults = await searchQuery(searchParams.q);

    foundItems = searchResults.results;
    console.log(searchResults.meta.facet.colors.buckets);
    // foundItems.forEach((item) => (item._id = item._id.toString()));
    // console.log(searchResults.facets[0].results[0].images);
    // console.log(searchResults.facets[0].meta);
    // console.log(searchResults.facets[0].meta.facet.colors.buckets);
    // console.log(foundItems[3].images);
    // console.log(foundItems[0].details);
    foundFacets = Object.entries<{
      buckets: { _id: string; count: number }[];
    }>(searchResults.meta.facet).map(([facetName, { buckets }]) => {
      const facetValues = buckets.map(({ _id: name, count }) => {
        return { name, count };
      });
      return {
        name: facetName,
        values: facetValues,
      };
    });
    hasResults = true;
  }
  return (
    <div className="px-0 sm:px-10">
      <BrowseItems productList={foundItems} facetList={foundFacets} />
    </div>
    // <>
    //   <div>Search results:</div>
    //   <div className="grid grid-cols-3">
    //     {foundItems.map((item) => (
    //       <RecommendedCard
    //         name={item.name}
    //         image={item.images[0]}
    //         priceUsd={4124}
    //       />
    //     ))}
    //   </div>
    //   {foundItems.length === 0 && <p>No results found</p>}
    // </>
  );
}
export default Page;
