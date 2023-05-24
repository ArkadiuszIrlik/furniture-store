import { Swiper, Navigation } from 'swiper';
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
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import 'swiper/css';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useEffect } from 'react';

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

  useEffect(() => {
    const swiperInsta = new Swiper('.swiper-insta', {
      direction: 'horizontal',
      loop: true,
      speed: 600,
      autoHeight: true,

      navigation: {
        nextEl: '.swiper-insta-button-next',
        prevEl: '.swiper-insta-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 3,
      breakpoints: {
        [parseInt(smallScreen, 10) * currentFontSizePx]: {
          slidesPerView: 4,
          spaceBetween: 3,
        },
        [parseInt(mediumScreen, 10) * currentFontSizePx]: {
          slidesPerView: 6,
          spaceBetween: 3,
        },
      },
      modules: [Navigation],
    });
  }, []);

  return (
    <div className="flex items-center">
      <div className="swiper-insta-button-prev">
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
      <div className="swiper swiper-insta">
        <div className="swiper-wrapper">
          {images.map((image, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <img
                  src={image}
                  alt=""
                  srcSet=""
                  className="object-cover object-center aspect-square"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="swiper-insta-button-next">
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
