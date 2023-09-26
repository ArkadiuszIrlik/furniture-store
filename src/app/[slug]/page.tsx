import { ReviewSection } from 'components/Review';
import { Category, Product } from 'containers';

function Page({ params }: { params: { slug: string } }) {
  let pageType;
  const categoryPageSlugs = ['furniture', 'lighting', 'decor'];
  if (categoryPageSlugs.includes(params.slug)) {
    pageType = 'category';
  }
  return pageType === 'category' ? (
    <div>
      <p>This is a category page</p>
      <Category />
    </div>
  ) : (
    <div>
      <p>This is a product page</p>
      <Product
        reviewSection={
          <ReviewSection reviewScore={reviewScore} reviewArray={reviews} />
        }
      />
    </div>
  );
}
export default Page;

const reviewScore = 3.76;
const reviews = [
  {
    username: 'Bob',
    user: {
      name: 'bob',
      email: 'bob@mail.mail',
    },
    score: 4,
    header: 'BEST BED EVER',
    content: 'I love this bed so much. Makes me sleep like a baby fr fr.',
    datePublished: '2023-03-05T14:17:44+0000',
  },
  {
    username: 'Bed Enjoyer',
    user: {
      name: 'bob',
      email: 'bob@mail.mail',
    },
    score: 2,
    header: 'Meh',
    content: "Meh I' slept on better.",
    datePublished: '2023-02-20T08:17:44+0000',
  },
  {
    username: 'Bed Enjoyer',
    user: {
      name: 'bob',
      email: 'bob@mail.mail',
    },
    score: 2,
    header: 'Meh',
    content: "Meh I' slept on better.",
    datePublished: '2023-02-20T08:17:44+0000',
  },
  {
    username: 'Bed Enjoyer',
    user: {
      name: 'bob',
      email: 'bob@mail.mail',
    },
    score: 2,
    header: 'Meh',
    content: "Meh I' slept on better.",
    datePublished: '2023-02-20T08:17:44+0000',
  },
];
