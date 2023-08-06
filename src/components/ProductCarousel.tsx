'use client';

import { useEffect, useRef } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import styleVars from 'styleVars';
import Image from 'next/image';

function ProductCarousel({ images }: { images: string[] }) {
  const colorAccents700 = styleVars.colors.accents['700'];
  const swiperContainerRef =
    useRef<React.JSX.IntrinsicElements['swiper-container']>(null);

  useEffect(() => {
    const params = {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 300,
      pagination: true,
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

    if (swiperContainerRef.current && swiperContainerRef.current.initialize) {
      Object.assign(swiperContainerRef.current, params);
      swiperContainerRef.current.initialize();
    }
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="swiper-product-image-button-prev absolute -left-2 top-1/2 z-10 -translate-y-1/2">
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
          // slides-per-view="1"
          // space-between="10"
          // direction="horizontal"
          // loop="false"
          // speed="600"
          // auto-height="false"
          // pagination="true"
          navigation-next-el=".swiper-product-image-button-next"
          navigation-prev-el=".swiper-product-image-button-prev"
        >
          {images.map((image, index) => {
            return (
              <swiper-slide key={index}>
                <Image
                  src={image}
                  alt=""
                  sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                  priority={index === 0}
                />
              </swiper-slide>
            );
          })}
        </swiper-container>
        <div className="swiper-product-image-button-next absolute -right-2 top-1/2 z-10 -translate-y-1/2">
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
