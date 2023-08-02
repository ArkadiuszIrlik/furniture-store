'use client';

//The purpose of this component is to register swiper to make it
//available for the rest of the app. This can only be done inside
//a client component.
import React from 'react';
import { register } from 'swiper/element/bundle';

register();

function SwiperProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
export default SwiperProvider;
