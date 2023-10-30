import Image from 'next/image';
import { formatPriceDollars } from 'helpers';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styleVars from 'styleVars';

interface SkeletonProps {
  isSkeleton: true;
  name?: any;
  image?: any;
  priceUsd?: any;
}

interface PresentationProps {
  isSkeleton: false;
  name: string;
  image: string;
  priceUsd: number | string;
}

function RecommendedCard({
  isSkeleton,
  name,
  image,
  priceUsd,
}: SkeletonProps | PresentationProps) {
  return (
    <article className="flex">
      <div className="flex grow flex-col rounded-3xl border-primary-300 bg-zinc-100 p-5">
        {isSkeleton ? (
          <Skeleton
            containerClassName="w-full block leading-none"
            // SET THE CORRECT PRODUCT IMAGE ASPECT RATIO!
            className="aspect-[199/259] !rounded-xl"
          />
        ) : (
          /* remove the width and height from Image */
          <Image src={image} width={1000} height={2000} alt="" />
        )}
        <p className="mb-2 font-open-sans font-semibold">
          {name || <Skeleton className="!rounded-xl" />}
        </p>
        <div
          className={`ml-auto mt-auto rounded-xl ${
            isSkeleton ? '' : 'bg-primary-300  px-5'
          }`}
        >
          <p>
            {isSkeleton ? (
              <SkeletonTheme
                baseColor={styleVars.colors.primary[300]}
                highlightColor="#eeece5"
              >
                <Skeleton
                  className="w-full !rounded-xl"
                  containerClassName="block w-16 leading-none"
                />
              </SkeletonTheme>
            ) : (
              formatPriceDollars(priceUsd)
            )}
          </p>
        </div>
      </div>
    </article>
  );
}
export default RecommendedCard;
