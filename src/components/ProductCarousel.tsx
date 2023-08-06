'use client';

import { useEffect, useRef } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import styleVars from 'styleVars';
import Image from 'next/image';
import { formatPriceDollars } from 'helpers';
import tailwindConfig from '../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import Link from 'next/link';
import { Swiper } from 'swiper/types';

function ProductCarousel({
  productList,
}: {
  productList: { image: string; name: string; priceUsd: number; url: string }[];
}) {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const mediumScreen = fullConfig.theme.screens.md;

  let currentFontSizePx: number;
  if (typeof window === 'undefined') {
    currentFontSizePx = 16;
  } else {
    currentFontSizePx = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
  }
  const colorAccents700 = styleVars.colors.accents['700'];

  const swiperContainerRef =
    useRef<React.JSX.IntrinsicElements['swiper-container']>(null);
  useEffect(() => {
    const params = {
      spaceBetween: 10,
      speed: 600,
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        [parseInt(smallScreen, 10) * currentFontSizePx]: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        [parseInt(mediumScreen, 10) * currentFontSizePx]: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
      injectStyles: [
        `
        .swiper-wrapper {
          align-items:center;
        }
        `,
      ],
    };

    if (swiperContainerRef.current && swiperContainerRef.current.initialize) {
      Object.assign(swiperContainerRef.current, params);
      swiperContainerRef.current.initialize();
    }
  }, []);

  return (
    <div className="relative flex items-center">
      <div className="swiper-product-image-button-prev absolute -left-2 top-1/2 z-10 -translate-y-1/2 md:static md:translate-y-0">
        <IconContext.Provider
          value={{
            style: { strokeWidth: '0.05rem' },
            size: '2.5rem',
          }}
        >
          <IoChevronBack />
        </IconContext.Provider>
      </div>
      <swiper-container
        init={false}
        ref={swiperContainerRef}
        navigation-next-el=".swiper-product-image-button-next"
        navigation-prev-el=".swiper-product-image-button-prev"
      >
        {productList.map((product, index) => {
          return (
            <swiper-slide key={index}>
              <Link href={product.url}>
                <div className="flex flex-col rounded-3xl border-primary-300 bg-zinc-100 p-5">
                  <Image src={product.image} alt="" />
                  <p className="mb-2 font-open-sans font-semibold">
                    {product.name}
                  </p>
                  <div className="ml-auto rounded-xl bg-primary-300 px-5">
                    <p className="">{formatPriceDollars(product.priceUsd)}</p>
                  </div>
                </div>
              </Link>
            </swiper-slide>
          );
        })}
      </swiper-container>
      <div className="swiper-product-image-button-next absolute -right-2 top-1/2 z-10 -translate-y-1/2 md:static md:translate-y-0">
        <IconContext.Provider
          value={{
            style: { strokeWidth: '0.05rem' },
            size: '2.5rem',
          }}
        >
          <IoChevronForward />
        </IconContext.Provider>
      </div>
    </div>
  );
}
export default ProductCarousel;
