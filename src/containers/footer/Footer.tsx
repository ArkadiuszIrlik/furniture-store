import { BsPlusLg } from 'react-icons/bs';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';
import { useMediaQuery } from 'hooks';
import { FooterDesktop, FooterMobile } from 'components';

export interface FooterCategory {
  header: string;
  items: string[];
}

function Footer() {
  // const fullConfig = resolveConfig(tailwindConfig);
  // const mediumScreen = fullConfig.theme.screens.md;
  // const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  const categories: FooterCategory[] = [
    {
      header: 'Shopping Services',
      items: ['Schedule Consultation', 'Showrooms', 'Trade Program', 'Outlet'],
    },
    {
      header: 'About',
      items: [
        'Our Story',
        'Reviews',
        'Careers',
        'Financing',
        'Patents',
        'Our Blog',
      ],
    },
    {
      header: 'Resources',
      items: [
        'Look Up Order Status',
        'Assembly Instructions',
        'Returns',
        'Shipping & Delivery',
        'FAQ',
        'Refer a Friend',
      ],
    },
    {
      header: 'Customer Support',
      items: [
        'Email: support@elevadesign.com',
        'Phone: +1-281-555-FAKE',
        'Hours:',
        'Mon - Fri: 10am to 8pm',
        'Sat - Sun: 10am to 2pm',
      ],
    },
  ];

  // return mediumMatches ? (
  //   <FooterDesktop categories={categories} />
  // ) : (
  //   <FooterMobile categories={categories} />
  // );
  return (
    <>
      <div className="hidden md:block">
        <FooterDesktop categories={categories} />
      </div>
      <div className="block md:hidden">
        <FooterMobile categories={categories} />
      </div>
    </>
  );
}
export default Footer;
