import { RefAttributes, DOMAttributes } from 'react';
import { SwiperContainer, SwiperSlide } from 'swiper/element';

type CustomElement<T> = Partial<
  T & DOMAttributes<T> & { children: any } & RefAttributes<Partial<T>>
>;

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      ['swiper-container']: CustomElement<SwiperContainer>;
      ['swiper-slide']: CustomElement<SwiperSlide>;
    }
  }
}
