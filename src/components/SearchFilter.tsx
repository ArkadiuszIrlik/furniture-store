function SearchFilter() {
  return (
    {isFilterShown &&
        (mediumMatches ? (
          <div
            className={`${
              animateFilter ? 'animate-[slide-in_0.4s_ease-out]' : ''
            }`}
          >
            <SearchFilterSidebar
              facetList={facets}
              onToggleFilterValue={handleFacetToggle}
            />
          </div>
        ) : (
          <>
            <SearchFilterModal
              isAnimated={animateFilter}
              facetList={facets}
              onToggleFilterValue={handleFacetToggle}
              onClose={handleToggleFilterVisibility}
            />
            <ModalOverlay onOverlayClick={handleToggleFilterVisibility} />
          </>
        ))}
  )
}
export default SearchFilter