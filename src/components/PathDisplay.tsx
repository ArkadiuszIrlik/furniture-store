export interface Path {
  name: string;
  id: string;
  isActive: boolean;
}

function PathDisplay({ pathArray }: { pathArray: Path[] }) {
  return (
    <p className="font-dm-sans font-bold text-base text-primary-700">
      <a href="#" className="hover:text-accents-700">
        Home
      </a>{' '}
      /{' '}
      {pathArray.map((destination, i, arr) => {
        return (
          <>
            <a href="#" className="hover:text-accents-700">
              {destination.name}
            </a>
            {i < arr.length - 1 ? ' / ' : undefined}
          </>
        );
      })}
    </p>
  );
}
export default PathDisplay;
