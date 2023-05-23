import { Swiper, Navigation } from 'swiper';
import {
  instaImage0,
  instaImage1,
  instaImage2,
  instaImage3,
  instaImage4,
  instaImage5,
} from '../assets';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import 'swiper/css';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';

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
  ];

  //   const swiperInsta = new Swiper('.swiper', {
  //     direction: 'horizontal',
  //     loop: false,
  //     speed: 600,
  //     autoHeight: true,

  //     navigation: {
  //       nextEl: '.swiper-insta-button-next',
  //       prevEl: '.swiper-insta-button-prev',
  //     },
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //     breakpoints: {
  //       [parseInt(smallScreen, 10) * currentFontSizePx]: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       [parseInt(mediumScreen, 10) * currentFontSizePx]: {
  //         slidesPerView: 4,
  //         spaceBetween: 20,
  //       },
  //     },
  //     modules: [Navigation],
  //   });

  return (
    <div>
      <div className="swiper">
        {/* <div className="swiper-insta-button-prev">
          <IconContext.Provider
            value={{
              style: {
                strokeWidth: '0.05rem',
              },
              size: '2.5rem',
            }}
          >
            <IoChevronBack />
          </IconContext.Provider>
        </div> */}
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
        {/* <div className="swiper-insta-button-next">
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
    </div>
  );
}
export default InstagramCarousel;
