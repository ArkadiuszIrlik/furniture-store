import resolveConfig from 'tailwindcss/resolveConfig';
import {
  Delivery,
  Swatch,
  ProductReturns,
  DelayedPayment,
  outdoorColImage,
  lightingImage,
  beddingImage,
} from '../../assets';
import { HomeFeaturesCard, InstagramCarousel } from '../../components';
import { useMediaQuery } from '../../hooks';
import tailwindConfig from '../../../tailwind.config';

function Home() {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const smallMatches = useMediaQuery(`(min-width: ${smallScreen})`);

  return (
    <div>
      <div
        className="flex justify-center bg-accents-700 px-4 py-9 sm:px-10 
          sm:py-14 md:py-20 mb-12"
      >
        <div
          className="md:flex md:items-start
          sm:grid sm:grid-cols-2 justify-center sm:justify-items-center
           gap-x-2 gap-y-12 md:gap-5
           flex flex-col items-stretch sm:flex-row
           "
        >
          <HomeFeaturesCard
            header="FLAT RATE SHIPPING*"
            para="Delivery calculated per shipment"
            image={Delivery}
            imageAlt="Product delivery"
          />
          <HomeFeaturesCard
            header="14-DAY RETURNS"
            para="Two weeks to fall in love"
            image={ProductReturns}
            imageAlt="Product returns"
          />
          <HomeFeaturesCard
            header="PAY OVER TIME"
            para="In auto monthly installments"
            image={DelayedPayment}
            imageAlt="Delayed payment"
          />
          <HomeFeaturesCard
            header="FREE SWATCHES"
            para="We encourage pickiness"
            image={Swatch}
            imageAlt="Fabric swatch"
          />
        </div>
      </div>
      <div className="px-0 sm:px-10 mb-12">
        <div
          className="grid grid-cols-1' sm:grid-cols-[3fr_2fr]
          grid-rows-2 gap-6 items-stretch justify-items-stretch"
        >
          <a
            href=""
            className="col-start-1 row-start-1 row-span-2 relative flex items-stretch"
          >
            <p
              className="font-dm-sans font-bold text-2xl xs:text-3xl
                 sm:text-4xl absolute z-50 text-white drop-shadow-md mt-[10%]
                  sm:mt-[5%] ml-[3%] xs:w-[70%] lg:text-5xl xl:text-6xl"
            >
              This summer, unwind with our outdoor collection.
            </p>
            <img
              src={outdoorColImage}
              alt="browse outdoor collection"
              srcSet=""
              className="object-cover object-center"
            />
          </a>
          {smallMatches && (
            <a
              href=""
              className="col-start-2 row-start-1 relative flex items-stretch"
            >
              <p
                className="font-dm-sans font-bold text-4xl
               absolute z-50 text-white drop-shadow-md mb-[5%] ml-[4%]
              lg:text-5xl xl:text-6xl self-end"
                aria-hidden="true"
              >
                Lighting
              </p>
              <img
                src={lightingImage}
                alt="browse lighting"
                srcSet=""
                className="object-cover object-center aspect-square"
              />
            </a>
          )}
          {smallMatches && (
            <a
              href=""
              className="col-start-2 row-start-2 relative flex items-stretch"
            >
              <p
                className="font-dm-sans font-bold text-4xl
               absolute z-50 text-white drop-shadow-md mb-[5%] ml-[4%]
              lg:text-5xl xl:text-6xl self-end"
                aria-hidden="true"
              >
                Bedding
              </p>
              <img
                src={beddingImage}
                alt="browse bedding"
                srcSet=""
                className="object-cover object-center aspect-square"
              />
            </a>
          )}
        </div>
      </div>
      <section className="mb-16">
        <h1 className="text-center text-4xl font-dm-sans mb-8">
          BE INSPIRED WITH #ELEVACOMMUNITY
        </h1>
        <InstagramCarousel />
      </section>
    </div>
  );
}
export default Home;
