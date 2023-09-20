import Image from 'next/image';
import { formatPriceDollars } from 'helpers';

function RecommendedCard({
  name,
  image,
  priceUsd,
}: {
  name: string;
  image: string;
  priceUsd: number | string;
}) {
  return (
    <article>
      <div className="flex flex-col rounded-3xl border-primary-300 bg-zinc-100 p-5">
        {/* remove the width and height from Image */}
        <Image src={image} width={1000} height={2000} alt="" />
        <p className="mb-2 font-open-sans font-semibold">{name}</p>
        <div className="ml-auto rounded-xl bg-primary-300 px-5">
          <p className="">{formatPriceDollars(priceUsd)}</p>
        </div>
      </div>
    </article>
  );
}
export default RecommendedCard;
