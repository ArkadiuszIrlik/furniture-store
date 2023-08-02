import { outdoorColImage, lightingImage, beddingImage } from 'assets';
import Image from 'next/image';
import Link from 'next/link';

function HomePhotosSection() {
  return (
    <div
      className="grid-cols-1' grid grid-rows-2
          items-stretch justify-items-stretch gap-6 sm:grid-cols-[3fr_2fr]"
    >
      <Link
        href="/collection/summer"
        className="relative col-start-1 row-span-2 row-start-1 flex items-stretch"
      >
        <p
          className="absolute z-10 ml-[3%] mt-[10%]
                 font-dm-sans text-2xl font-bold text-white drop-shadow-md xs:w-[70%]
                  xs:text-3xl sm:mt-[5%] sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          This summer, unwind with our outdoor collection.
        </p>
        <Image
          src={outdoorColImage}
          alt="browse outdoor collection"
          className="object-cover object-center"
        />
      </Link>
      <div className="hidden sm:block">
        <Link
          href="categories/lighting"
          className="relative col-start-2 row-start-1 flex items-stretch"
        >
          <p
            className="absolute z-10 mb-[5%]
                 ml-[4%] self-end font-dm-sans text-4xl font-bold text-white
                drop-shadow-md lg:text-5xl xl:text-6xl"
            aria-hidden="true"
          >
            Lighting
          </p>
          <Image
            src={lightingImage}
            alt="browse lighting"
            className="aspect-square object-cover object-center"
          />
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link
          href="/categories/bedding"
          className="relative col-start-2 row-start-2 flex items-stretch"
        >
          <p
            className="absolute z-10 mb-[5%]
                 ml-[4%] self-end font-dm-sans text-4xl font-bold text-white
                drop-shadow-md lg:text-5xl xl:text-6xl"
            aria-hidden="true"
          >
            Bedding
          </p>
          <Image
            src={beddingImage}
            alt="browse bedding"
            className="aspect-square object-cover object-center"
          />
        </Link>
      </div>
    </div>
  );
}
export default HomePhotosSection;
