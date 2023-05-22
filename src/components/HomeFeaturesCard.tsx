function HomeFeaturesCard({ header, para, image, imageAlt }) {
  return (
    <div className="flex flex-col justify-start gap-x-5 sm:gap-0 sm:flex-nowrap text-primary-300 items-center sm:max-w-[19rem] md:max-w-sm text-center">
      <img
        src={image}
        alt={imageAlt}
        srcSet=""
        className="max-w-[8rem] sm:max-w-[50%] mb-2 sm:mb-4 md:mb-6"
      />
      <h3 className="font-dm-sans text-2xl mb-2 sm:mb-4">{header}</h3>
      <p className="font-open-sans text-xl basis-full sm:basis-auto">{para}</p>
    </div>
  );
}
export default HomeFeaturesCard;
