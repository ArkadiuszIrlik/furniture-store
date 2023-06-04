import resolveConfig from 'tailwindcss/resolveConfig';
import { useState } from 'react';
import { PathDisplay, ProductColorSelector } from '../../components';
import tailwindConfig from '../../../tailwind.config';
import { useMediaQuery } from '../../hooks';
import {
  bed1,
  bed2,
  bed3,
  bed4,
  bed5,
  bed6,
  bed7,
  bed8,
  bed9,
  navyVelvet,
  emeraldVelvet,
  prepSchoolPlaid,
} from '../../assets';

function Product() {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const smallMatches = useMediaQuery(`(min-width: ${smallScreen})`);
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);
  const colorAccents700 = fullConfig.theme.colors.accents['700'];
  const colorAccents300 = fullConfig.theme.colors.accents['300'];

  const product = {
    name: 'Adara Bed',
    priceUsd: 1249,
    images: [bed1, bed2, bed3, bed4, bed5, bed6, bed7, bed8, bed9],
    reviewScore: 3.76,
    reviews: [
      {
        name: 'Bob',
        score: 4,
        header: 'BEST BED EVER',
        content: 'I love this bed so much. Makes me sleep like a baby fr fr.',
      },
      {
        name: 'Bed Enjoyer',
        score: 2,
        header: 'Meh',
        content: "Meh I' slept on better.",
      },
    ],
    colors: [
      { name: 'Emerald Velvet', image: emeraldVelvet },
      { name: 'Navy Velvet', image: navyVelvet },
      { name: 'Prep School Plaid', image: prepSchoolPlaid },
    ],
  };

  const [activeImage, setActiveImage] = useState(0);
  // Only set this if the color property exists on the product
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  // const reviewPercentage = Math.round(product.score / 0.5) * 0.5;
  const reviewScorePercentage = `${Math.floor(product.reviewScore * 20)}%`;

  function handleSwitchActiveImage(imageIndex: number) {
    setActiveImage(imageIndex);
  }
  function handleSwitchSelectedColorIndex(colorIndex: number) {
    setSelectedColorIndex(colorIndex);
  }

  const pathToProduct = [
    { name: 'Furniture' },
    { name: 'Bedroom Furniture' },
    { name: 'Beds' },
    { name: 'Adara Bed' },
  ];

  return (
    <div className="px-3 md:px-12">
      <div className="mb-5">
        <PathDisplay pathArray={pathToProduct} />
      </div>
      <div className="flex flex-col items-stretch">
        <div
          className="grid grid-cols-1 gap-5
            sm:grid-cols-[minmax(5rem,7%)_minmax(0px,max-content)_minmax(35%,1fr)]
        "
        >
          {smallMatches && (
            <div className="flex flex-col gap-2">
              {product.images.map((image, index) => {
                return (
                  <button
                    type="button"
                    onClick={() => handleSwitchActiveImage(index)}
                    className={`border-2 rounded-md overflow-hidden ${
                      activeImage === index
                        ? 'border-primary-700'
                        : 'border-white'
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className={`${
                        activeImage === index ? '' : 'opacity-[60%]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          )}
          <div>
            <img src={product.images[activeImage]} alt="" srcSet="" />
          </div>
          <div className="flex flex-col ml-4">
            <h1 className="font-dm-sans font-medium text-3xl mt-20">
              {product.name}
            </h1>
            <div className="flex gap-3 items-end mb-4">
              <div
                className={`bg-review-score leading-none text-xl
                    before:content-["★★★★★"] before:tracking-tighter
                    bg-clip-text text-transparent`}
                style={{ '--scorePercentage': reviewScorePercentage }}
              />
              <p className="leading-none font-dm-sans font-medium">
                {product.reviews.length} Reviews
              </p>
            </div>
            <p className="font-dm-sans font-bold text-3xl mb-8">
              $
              {product.priceUsd
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
            <div className="border-y-[1px] border-primary-300 py-4">
              <ProductColorSelector
                colorList={product.colors}
                selectedColorIndex={selectedColorIndex}
                onChangeSelection={handleSwitchSelectedColorIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
