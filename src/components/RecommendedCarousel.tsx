import resolveConfig from 'tailwindcss/resolveConfig';
import { useEffect, useRef } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import RecommendedCard from './RecommendedCard';
import styleVars from 'styleVars';

  const smallScreen = styleVars.screens.sm;
  const mediumScreen = styleVars.screens.md;

  const currentFontSizePx = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const swiperContainerRef = useRef(null);

  const productList: any[] = [...Array(12)];

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
    swiperContainerRef.current.initialize();
  }, []);

  return (
    <div className="relative flex items-center">
      <div className="swiper-recommended-button-prev absolute -left-2 top-1/2 z-10 -translate-y-1/2 md:static md:translate-y-0">
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
        ref={swiperContainerRef}
        init="false"
        navigation-next-el=".swiper-recommended-button-next"
        navigation-prev-el=".swiper-recommended-button-prev"
      >
        {productList.map((product, index) => {
          return (
            <swiper-slide key={index}>
              <RecommendedCard />
            </swiper-slide>
          );
        })}
      </swiper-container>
      <div className="swiper-recommended-button-next absolute -right-2 top-1/2 z-10 -translate-y-1/2 md:static md:translate-y-0">
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
