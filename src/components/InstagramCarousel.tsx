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

function InstagramCarousel() {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const mediumScreen = fullConfig.theme.screens.md;

  const currentFontSizePx = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

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
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      direction: 'horizontal',
      loop: true,
      speed: 600,
      autoHeight: false,
      navigation: {
        nextEl: '.swiper-insta-button-next',
        prevEl: '.swiper-insta-button-prev',
      },
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

    Object.assign(swiperContainerRef.current, swiperParams);
    swiperContainerRef.current.initialize();
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
        init="false"
        ref={swiperContainerRef}
        class="-mx-1 md:mx-0"
      >
        {images.map((image, index) => {
          return (
            <swiper-slide key={index}>
              <img
                src={image}
                alt=""
                srcSet=""
                className="object-cover object-center aspect-square"
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
