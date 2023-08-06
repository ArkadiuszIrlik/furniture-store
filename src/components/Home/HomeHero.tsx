'use client';

import tailwindConfig from '../../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import { useClientCheck, useMediaQuery } from 'hooks';
import HomeHeroCarousel from './HomeHeroCarousel';
import { homeHeroImageMobile1 } from 'assets';
import Image from 'next/image';
import Link from 'next/link';
import HomeHeroMobile from './HomeHeroMobile';
import { ReactNode } from 'react';

function HomeHero({ children }: { children: ReactNode }) {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const smallMatches = useMediaQuery(`(min-width: ${smallScreen})`);
  const isClient = useClientCheck();
  return isClient ? (
    smallMatches ? (
      <HomeHeroCarousel />
    ) : (
      children || null
    )
  ) : null;
}
export default HomeHero;
