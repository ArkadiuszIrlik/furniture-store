function Page({ params }) {
  let pageType;
  const categoryPageSlugs = ['furniture', 'lighting', 'decor'];
  if (categoryPageSlugs.includes(params.slug)) {
    pageType = 'category';
  }
  return pageType === 'category' ? (
    <div>
      <p>This is a category page</p>
    </div>
  ) : (
    <div>
      <p>This is a product page</p>
    </div>
  );
}
export default Page;
