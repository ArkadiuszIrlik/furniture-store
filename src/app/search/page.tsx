import { connectToDb } from 'helpers';
import { Product } from 'models';
import { Products } from 'models/Products';
import { BrowseItems } from 'containers';
import { SearchFacet } from 'components/SearchFilterSidebar';

export interface SearchPageParams {
  q: string;
  p: string;
  sort: 'recommended' | 'price_asc' | 'price_desc' | 'review';
}

type SortDocument = { priceUsd: 1 | -1 } | { avgReviewScore: -1 } | undefined;

async function searchQuery(
  query: string,
  offset = 0,
  limit = 20,
  sortDoc?: SortDocument
) {
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
                      query,
                    },
                  },
                  {
                    text: {
                      path: 'color',
                      query,
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
          sort: sortDoc,
        },
      },
      {
        $facet: {
          results: [
            { $skip: offset },
            { $limit: limit },
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
    }
    return results[0];
  } catch (error) {
    throw error;
  }
}

async function Page({ searchParams }: { searchParams: SearchPageParams }) {
  let foundItems: Products[] = [];
  let foundFacets: SearchFacet[] = [];
  const resultsPerPage = 1;
  let resultsCount = 0;
  let sortDoc: SortDocument;
  switch (searchParams.sort) {
    case 'recommended':
      sortDoc = undefined;
      break;
    case 'price_asc':
      sortDoc = { priceUsd: 1 };
      break;
    case 'price_desc':
      sortDoc = { priceUsd: -1 };
      break;
    case 'review':
      sortDoc = { avgReviewScore: -1 };
      break;
    default:
      sortDoc = undefined;
  }
  if (searchParams.q) {
    let resultOffset;
    if (searchParams.p) {
      resultOffset = (Number(searchParams.p) - 1) * resultsPerPage;
    }
    const searchResults = await searchQuery(
      searchParams.q,
      resultOffset,
      resultsPerPage,
      sortDoc
    );
    foundItems = searchResults.results;
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
    resultsCount = searchResults.meta.count.lowerBound;
  }
  return (
    <div className="px-3 md:px-12">
      <BrowseItems
        productList={foundItems}
        facetList={foundFacets}
        resultsPerPage={resultsPerPage}
        totalResults={resultsCount}
      />
    </div>
  );
}
export default Page;
