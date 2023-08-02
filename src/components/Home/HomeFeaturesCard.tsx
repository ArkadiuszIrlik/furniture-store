import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

function HomeFeaturesCard({
  header,
  para,
  image,
  imageAlt,
}: {
  header: string;
  para: string;
  image: string | StaticImport;
  imageAlt: string;
}) {
  return (
    <div className="flex flex-col items-center justify-start gap-x-5 text-center text-primary-300 sm:max-w-[19rem] sm:flex-nowrap sm:gap-0 md:max-w-sm">
      <Image
        src={image}
        alt={imageAlt}
        className="mb-2 max-w-[8rem] sm:mb-4 sm:max-w-[50%] md:mb-6"
        draggable="false"
      />
      <h3 className="mb-2 font-dm-sans text-2xl sm:mb-4">{header}</h3>
      <p className="basis-full font-open-sans text-xl sm:basis-auto">{para}</p>
    </div>
  );
}
export default HomeFeaturesCard;
