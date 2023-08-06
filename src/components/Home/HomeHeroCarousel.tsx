'use client';

import { useEffect, useRef } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import styleVars from 'styleVars';
import Image from 'next/image';
import { formatPriceDollars } from 'helpers';
import tailwindConfig from '../../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import Link from 'next/link';
import { Swiper } from 'swiper/types';
import { homeHeroImage1, homeHeroImage2 } from 'assets';

function HomeHeroCarousel() {
  //     {
  //   productList,
  // }: {
  //   productList: { image: string; name: string; priceUsd: number; url: string }[];
  // }
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
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      speed: 1500,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        type: 'custom',
        el: '.swiper-custom-pagination-container',
        clickable: true,
        renderCustom: function (
          swiper: Swiper,
          current: number,
          total: number
        ) {
          let bodyMarkup: string = '';
          for (let i = 1; i <= total; i++) {
            bodyMarkup += `<div class="${
              current === i
                ? 'swiper-square-bullet-active'
                : 'swiper-square-bullet-inactive'
            } swiper-square-bullet swiper-pagination-bullet onClick="onBulletClick"></div>`;
          }
          return `
              <div class="swiper-square-bullet-container">
                ${bodyMarkup}
              </div>
              `;
        },
      },
      injectStyles: [
        `
        .swiper-wrapper {
          align-items:center;
        }
        .swiper-pagination-bullet-active {
          background-color: ${colorAccents700} !important;
        }
        .swiper-square-bullet-container {
          display: flex;
          gap: 0.3rem;
          height: 0.5rem;
        }
        .swiper-square-bullet-active {
          width: 3rem;
          background-color: ${colorAccents700};

        }
        .swiper-square-bullet-inactive {
          width: 3rem;
          background-color: ${styleVars.colors.accents['300']};
          
        }
        .swiper-square-bullet.swiper-pagination-bullet {
          all: unset;
          width: 3rem;
          background-color: ${styleVars.colors.accents['300']};
          cursor: pointer;
        }
        .swiper-square-bullet.swiper-pagination-bullet.swiper-square-bullet-active {
          background-color: ${colorAccents700};
          cursor: default;
        }
        .swiper-square-bullet.swiper-pagination-bullet.swiper-square-bullet-inactive:hover {
          background-color: white;
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
    <div className="relative flex items-center overflow-hidden">
      <div className="swiper-custom-pagination-container absolute bottom-[5%] left-[5%] z-20 hidden h-10 sm:block"></div>
      {/* <div className="swiper-product-image-button-prev absolute -left-2 top-1/2 z-10 -translate-y-1/2 md:static md:translate-y-0">
        <IconContext.Provider
          value={{
            style: { strokeWidth: '0.05rem' },
            size: '2.5rem',
          }}
        >
          <IoChevronBack />
        </IconContext.Provider>
      </div> */}
      <swiper-container
        init={false}
        ref={swiperContainerRef}
        // navigation-next-el=".swiper-product-image-button-next"
        // navigation-prev-el=".swiper-product-image-button-prev"
      >
        <swiper-slide>
          <div className="relative h-[18rem] overflow-hidden sm:h-[40rem]">
            <div className="absolute z-10 ml-[3%] mt-[1%] flex flex-col">
              <p
                className="
                       select-none font-dm-sans text-2xl font-bold text-white drop-shadow-md
                        xs:w-[70%] xs:text-3xl sm:mt-[5%] sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                Award-winning sofas and sectionals, customizable by you
              </p>
              <Link href={'categories/sofas/'} className="mr-auto mt-5">
                <button
                  type="button"
                  className="rounded-lg bg-accents-700 px-16 py-2 text-white"
                >
                  SHOP SOFAS
                </button>
              </Link>
            </div>
            <Image
              src={homeHeroImage1}
              alt="browse outdoor collection"
              className="h-full object-cover object-center"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="relative h-[40rem] overflow-hidden">
            <div className="absolute z-10 ml-[3%] mt-[1%] flex flex-col">
              <p
                className="
                       select-none font-dm-sans text-2xl font-bold text-white drop-shadow-md
                        xs:w-[70%] xs:text-3xl sm:mt-[5%] sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                A better suite of bedroom furniture, starting with a solid frame
              </p>
              <Link href={'categories/sofas/'} className="mr-auto mt-5">
                <button
                  type="button"
                  className="rounded-lg bg-accents-700 px-16 py-2 text-white"
                >
                  SHOP BEDROOM
                </button>
              </Link>
            </div>
            <Image
              src={homeHeroImage2}
              alt="browse outdoor collection"
              className="h-full object-cover object-center"
            />
          </div>
        </swiper-slide>
      </swiper-container>
      {/* <div className="swiper-product-image-button-next absolute -right-2 top-1/2 z-10 -translate-y-1/2 md:static md:translate-y-0">
        <IconContext.Provider
          value={{
            style: { strokeWidth: '0.05rem' },
            size: '2.5rem',
          }}
        >
          <IoChevronForward />
        </IconContext.Provider>
      </div> */}
    </div>
  );
}
export default HomeHeroCarousel;
