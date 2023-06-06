import resolveConfig from 'tailwindcss/resolveConfig';
import { useEffect, useRef } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { RecommendedCard } from '.';
import tailwindConfig from '../../tailwind.config';


function RecommendedCarousel() {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const mediumScreen = fullConfig.theme.screens.md;

  const currentFontSizePx = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const swiperContainerRef = useRef(null)

  const productList: any[] = [...Array(12)];

  useEffect(() => {
    const swiperParams = {
      direction: 'horizontal',
      loop: false,
      speed: 600,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-recommended-button-next',
        prevEl: '.swiper-recommended-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        [parseInt(smallScreen, 10) * currentFontSizePx]: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        [parseInt(mediumScreen, 10) * currentFontSizePx]: {
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
      },
    }
    Object.assign(swiperContainerRef.current, swiperParams);
    swiperContainerRef.current.initialize();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="swiper-recommended-button-prev">
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
      </div>
        <swiper-container
        ref={swiperContainerRef}
        init="false"
        >
        {productList.map((product, index) => {
              return (
                <swiper-slide key={index}>
                  <RecommendedCard />
                </swiper-slide>
              );
            })}
        </swiper-container>
      <div className="swiper-recommended-button-next">
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
export default RecommendedCarousel;
