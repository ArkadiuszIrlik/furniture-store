import resolveConfig from 'tailwindcss/resolveConfig';
import { useEffect, useRef } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import tailwindConfig from '../../tailwind.config';

function ProductCarousel({ images }: { images: string[] }) {
  const fullConfig = resolveConfig(tailwindConfig);

  const colorAccents700 = fullConfig.theme.colors.accents['700'];

  const swiperContainerRef = useRef(null);
  useEffect(() => {
    const params = {
      injectStyles: [
        `
        .swiper-wrapper {
          align-items:center;
        }
        .swiper-pagination-bullet-active {
          background-color: ${colorAccents700} !important;
        }
  
        `,
      ],
    };
    Object.assign(swiperContainerRef.current, params);
    swiperContainerRef.current.initialize();
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="swiper-product-image-button-prev absolute top-1/2 -left-2 -translate-y-1/2 z-10">
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
          init="false"
          ref={swiperContainerRef}
          slides-per-view="1"
          space-between="10"
          direction="horizontal"
          loop="false"
          speed="600"
          auto-height="false"
          pagination="true"
          navigation-next-el=".swiper-product-image-button-next"
          navigation-prev-el=".swiper-product-image-button-prev"
        >
          {images.map((image, index) => {
            return (
              <swiper-slide key={index}>
                <img src={image} alt="" srcSet="" />
              </swiper-slide>
            );
          })}
        </swiper-container>
        <div className="swiper-product-image-button-next absolute top-1/2 -right-2 -translate-y-1/2 z-10">
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
    </div>
  );
}
export default ProductCarousel;
