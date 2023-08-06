import Link from 'next/link';
import Image from 'next/image';
import { homeHeroImageMobile1 } from 'assets';

function HomeHeroMobile() {
  return (
    <div className="relative h-[30rem] overflow-hidden">
      <div className="absolute z-10 ml-[5%] mt-[5%] flex flex-col justify-between">
        <p
          className="
               font-dm-sans text-2xl font-bold text-white drop-shadow-md xs:w-[70%]
                xs:text-3xl sm:mt-[5%] sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          Award-winning sofas and sectionals, customizable by you
        </p>
      </div>
      <Link
        href={'categories/sofas/'}
        className="absolute bottom-0 left-0 right-0 mb-3 flex"
      >
        <button
          type="button"
          className="mx-auto rounded-lg bg-accents-700 px-16 py-2 text-white"
        >
          SHOP SOFAS
        </button>
      </Link>
      <Image
        src={homeHeroImageMobile1}
        alt="browse outdoor collection"
        className="h-full object-cover object-bottom xs:object-center"
        priority
      />
    </div>
  );
}
export default HomeHeroMobile;
