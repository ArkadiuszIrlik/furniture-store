import { InstagramCarousel, RecommendedCarousel } from 'components';
import { Footer } from 'containers';
import { AdaraBed } from 'assets';
import {
  HomeFeaturesSection,
  HomePhotosSection,
  HomeHero,
  HomeHeroMobile,
} from 'components/Home';

const recommendedProducts = [
  {
    image: AdaraBed,
    name: 'Adara Bed',
    priceUsd: 1249,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Ruba Pillow',
    priceUsd: 99,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Hannah Sideboard',
    priceUsd: 879,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Adara Bed',
    priceUsd: 124,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Ruba Pillow',
    priceUsd: 99,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Hannah Sideboard',
    priceUsd: 879,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Adara Bed',
    priceUsd: 1249,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Ruba Pillow',
    priceUsd: 99,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Hannah Sideboard',
    priceUsd: 879,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Adara Bed',
    priceUsd: 1249,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Ruba Pillow',
    priceUsd: 99,
    url: 'products/125714671',
  },
  {
    image: AdaraBed,
    name: 'Hannah Sideboard',
    priceUsd: 879,
    url: 'products/125714671',
  },
];

export default function Page() {
  return (
    <div>
      <div className="mb-14 mt-3 sm:-mt-1">
        <HomeHero>
          <HomeHeroMobile />
        </HomeHero>
      </div>
      <div className="mb-8">
        <HomeFeaturesSection />
      </div>
      <p className="mb-5 text-center text-3xl">RECOMMENDED FOR YOU</p>
      <div className="mb-8 md:px-10">
        <ProductCarousel productList={recommendedProducts} />
      </div>
      <div className="mb-8 px-0 sm:px-10">
        <HomePhotosSection />
      </div>
      <p className="mb-4 text-center text-3xl">
        GET INSPIRED WITH #ELEVAFAMILY
      </p>
      <div className="mb-14 md:px-10">
        <InstagramCarousel />
      </div>
      <Footer />
    </div>
  );
}
