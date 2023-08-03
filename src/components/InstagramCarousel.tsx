'use client';

import resolveConfig from 'tailwindcss/resolveConfig';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useEffect, useRef } from 'react';
import tailwindConfig from '../../tailwind.config';
import {
  instaImage0,
  instaImage1,
  instaImage2,
  instaImage3,
  instaImage4,
  instaImage5,
  instaImage6,
  instaImage7,
  instaImage8,
  instaImage9,
  instaImage10,
  instaImage11,
} from '../assets';
import Image from 'next/image';

function InstagramCarousel() {
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

  const images = [
    instaImage0,
    instaImage1,
    instaImage2,
    instaImage3,
    instaImage4,
    instaImage5,
    instaImage6,
    instaImage7,
    instaImage8,
    instaImage9,
    instaImage10,
    instaImage11,
  ];

  const swiperContainerRef =
    useRef<React.JSX.IntrinsicElements['swiper-container']>(null);

  useEffect(() => {
    const swiperParams = {
      loop: true,
      speed: 600,
      // navigation: {
      //   nextEl: '.swiper-insta-button-next',
      //   prevEl: '.swiper-insta-button-prev',
      // },
      spaceBetween: 3,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        [parseInt(smallScreen, 10) * currentFontSizePx]: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
        [parseInt(mediumScreen, 10) * currentFontSizePx]: {
          slidesPerView: 6,
          slidesPerGroup: 3,
        },
      },
    };
    if (swiperContainerRef.current && swiperContainerRef.current.initialize) {
      Object.assign(swiperContainerRef.current, swiperParams);
      swiperContainerRef.current.initialize();
    }
  }, []);

  return (
    <div className="flex items-center">
      <div className="swiper-insta-button-prev -ml-1 sm:ml-0">
        <IconContext.Provider
          value={{
            style: {
              strokeWidth: '0.05rem',
            },
            className: 'drop-shadow-[0_0_35px_red]',
            size: '2.5rem',
          }}
        >
          <IoChevronBack />
        </IconContext.Provider>
      </div>
      <swiper-container
        init={false}
        navigation-next-el=".swiper-insta-button-next"
        navigation-prev-el=".swiper-insta-button-prev"
        ref={swiperContainerRef}
        className="-mx-1 md:mx-0"
      >
        {images.map((image, index) => {
          return (
            <swiper-slide key={index}>
              <Image
                src={image}
                alt=""
                className="aspect-square object-cover object-center"
              />
            </swiper-slide>
          );
        })}
      </swiper-container>
      <div className="swiper-insta-button-next -mr-1 sm:mr-0">
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
export default InstagramCarousel;
