import resolveConfig from 'tailwindcss/resolveConfig';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { Swiper, Navigation, Pagination } from 'swiper';
import { RecommendedCard } from '.';
import tailwindConfig from '../../tailwind.config';
import 'swiper/css';
// import 'swiper/css/navigation';

function RecommendedCarousel() {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const mediumScreen = fullConfig.theme.screens.md;

  const currentFontSizePx = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  const productList: any[] = [...Array(12)];

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    speed: 600,
    autoHeight: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      [parseInt(smallScreen, 10) * currentFontSizePx]: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      [parseInt(mediumScreen, 10) * currentFontSizePx]: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    modules: [Navigation, Pagination],
  });

  return (
    <div className="flex items-center">
      <div className="swiper-button-prev">
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
      <div className="swiper w-[90%]">
        <div className="swiper-wrapper">
          {productList.map((product, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <RecommendedCard />
              </div>
            );
          })}
        </div>
      </div>
      <div className="swiper-button-next">
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
