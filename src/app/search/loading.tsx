'use client';

import { BrowseItems } from 'containers';

function loading() {
  return (
    <div className="px-3 md:px-12">
      <BrowseItems isSkeleton />
    </div>
  );
}
export default loading;
