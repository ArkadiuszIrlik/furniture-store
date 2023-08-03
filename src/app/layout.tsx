import './global.css';
import { DM_Sans, Open_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});
const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

// import { register } from 'swiper/element/bundle';

// register();

import { Header } from 'containers';
import CartProvider from 'context/CartProvider';
import { SwiperProvider } from 'components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${openSans.variable}`}>
      <body
        className={`mx-auto flex min-h-screen flex-col
     font-dm-sans text-text lg:mx-[8%] xl:mx-[14%]
     2xl:mx-auto 2xl:max-w-[1800px]`}
      >
        <SwiperProvider>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </SwiperProvider>
      </body>
    </html>
  );
}
