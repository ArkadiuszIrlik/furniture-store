import { Fragment } from 'react';

export interface Path {
  name: string;
  id: string;
  isActive: boolean;
}

function PathDisplay({ pathArray }: { pathArray: Path[] }) {
  return (
    <p className="font-dm-sans text-base font-bold text-primary-700">
      <a href="#" className="hover:text-accents-700">
        Home
      </a>{' '}
      /{' '}
      {pathArray.map((destination, i, arr) => {
        return (
          <Fragment key={i}>
            <a href="#" className="hover:text-accents-700">
              {destination.name}
            </a>
            {i < arr.length - 1 ? ' / ' : undefined}
          </Fragment>
        );
      })}
    </p>
  );
}
export default PathDisplay;
