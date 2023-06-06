import resolveConfig from 'tailwindcss/resolveConfig';
import { useState, useEffect, useRef } from 'react';
import { BsTruck } from 'react-icons/bs';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import {
  PathDisplay,
  ProductColorSelector,
  ProductSizeSelector,
  PrimaryButton,
  SpinButton,
} from '../../components';
import tailwindConfig from '../../../tailwind.config';
import { useMediaQuery } from '../../hooks';
import {
  bed1,
  bed2,
  bed3,
  bed4,
  bed5,
  bed6,
  bed7,
  bed8,
  bed9,
  navyVelvet,
  emeraldVelvet,
  prepSchoolPlaid,
} from '../../assets';

function Product() {
  const fullConfig = resolveConfig(tailwindConfig);
  const smallScreen = fullConfig.theme.screens.sm;
  const smallMatches = useMediaQuery(`(min-width: ${smallScreen})`);
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);
  const colorAccents700 = fullConfig.theme.colors.accents['700'];
  const colorAccents300 = fullConfig.theme.colors.accents['300'];

  const product = {
    name: 'Adara Bed',
    priceUsd: 1249,
    images: [bed1, bed2, bed3, bed4, bed5, bed6, bed7, bed8, bed9],
    description:
      'A stately bed frame made to fit a serene space. Its subtle winged headboard and trim lines offer crisp sophistication. Bring a bespoke touch to your bedroom with this upholstered bed that suits and elevates a tailored environment.',
    reviewScore: 3.76,
    reviews: [
      {
        name: 'Bob',
        score: 4,
        header: 'BEST BED EVER',
        content: 'I love this bed so much. Makes me sleep like a baby fr fr.',
      },
      {
        name: 'Bed Enjoyer',
        score: 2,
        header: 'Meh',
        content: "Meh I' slept on better.",
      },
    ],
    colors: [
      { name: 'Emerald Velvet', image: emeraldVelvet },
      { name: 'Navy Velvet', image: navyVelvet },
      { name: 'Prep School Plaid', image: prepSchoolPlaid },
    ],
    sizes: [{ name: 'Cal King' }, { name: 'King' }, { name: 'Queen' }],
    information: [
      {
        header: 'Details',
        content: [
          'made to order items are not returnable',
          'Ships in: 2-4 Weeks',
          'material: Pine wood, polyurethane',
          'fabric content: 95% Polyester, 5% Linen',
          'fabric color: Talc Linen',
          'Box spring required',
          'center support leg: Yes',
          'assembly required: Yes',
          'Made In: USA with imported materials',
        ],
      },
      {
        header: 'Dimensions',
        content: [
          'Overall Dimensions: 77"W x 89"D x 55"H',
          'product weight: 140 lbs',
          'Footboard Width: 72" ',
          'Distance from Bottom of Headboard to Mattress Platform: 18"H',
          'mattress cavity: 7.5"',
          'headboard dimensions: 77"W x 11"D x 55"H',
          'side rail height: 13.5"',
          'height to top of side rail: 13.5"',
          'under bed clearance: 4"',
        ],
      },
      {
        header: 'Care',
        content: [
          'Avoid placing upholstery in direct sunlight to minimize fading.',
          'Depending on the fabric, pilling or crushing may occur with wear.',
          'Spot clean by blotting with a light-colored, damp …end contacting a professional upholstery cleaner.',
          'Vacuum regularly with an upholstery attachment, and fluff and flip cushions as needed.',
        ],
      },
    ],
  };

  const [activeImage, setActiveImage] = useState(0);
  // Only set this if the color property exists on the product
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [chosenQuantity, setChosenQuantity] = useState(1);
  const [infoDropdownOpenState, setInfoDropdownOpenState] = useState(
    product.information.map((section) => {
      return { isOpen: false };
    })
  );

  // const reviewPercentage = Math.round(product.score / 0.5) * 0.5;
  const reviewScorePercentage = `${Math.floor(product.reviewScore * 20)}%`;

  function handleSwitchActiveImage(imageIndex: number) {
    setActiveImage(imageIndex);
  }
  function handleSwitchSelectedColorIndex(colorIndex: number) {
    setSelectedColorIndex(colorIndex);
  }
  function handleSwitchSelectedSizeIndex(sizeIndex: number) {
    setSelectedSizeIndex(sizeIndex);
  }
  function handleQuantityChange(nextValue: number) {
    if (nextValue < 1 || nextValue > 99) {
      return;
    }
    setChosenQuantity(nextValue);
  }
  function handleToggleInfoSectionOpen(sectionIndex: number) {
    setInfoDropdownOpenState(
      infoDropdownOpenState.map((infoSection, index) => {
        if (index === sectionIndex) {
          return { ...infoSection, isOpen: !infoSection.isOpen };
        }
        return infoSection;
      })
    );
  }

  const pathToProduct = [
    { name: 'Furniture' },
    { name: 'Bedroom Furniture' },
    { name: 'Beds' },
    { name: 'Adara Bed' },
  ];

  const swiperContainerRef = useRef(null);
  useEffect(() => {
    if (swiperContainerRef.current === null) {
      return;
    }
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
  }, [swiperContainerRef]);

  return (
    <div className="px-3 md:px-12">
      <div className="mb-2 sm:mb-5">
        <PathDisplay pathArray={pathToProduct} />
      </div>
      <div className="flex flex-col items-stretch">
        <div
          className="grid grid-cols-1 gap-3 sm:gap-5
            sm:grid-cols-[minmax(5rem,7%)_minmax(0px,max-content)_minmax(35%,1fr)]
        "
        >
          {smallMatches && (
            <div className="flex flex-col gap-2">
              {product.images.map((image, index) => {
                return (
                  <button
                    type="button"
                    onClick={() => handleSwitchActiveImage(index)}
                    className={`border-2 rounded-md overflow-hidden ${
                      activeImage === index
                        ? 'border-primary-700'
                        : 'border-white'
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className={`${
                        activeImage === index ? '' : 'opacity-[60%]'
                      }`}
                      draggable="false"
                    />
                  </button>
                );
              })}
            </div>
          )}
          <div>
            {smallMatches ? (
              <img
                src={product.images[activeImage]}
                alt=""
                srcSet=""
                draggable="false"
              />
            ) : (
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
                    {product.images.map((image, index) => {
                      return (
                        <swiper-slide>
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
            )}
          </div>
          <div className="flex flex-col sm:ml-4">
            <h1 className="font-dm-sans font-medium text-3xl sm:mt-20">
              {product.name}
            </h1>
            <div className="flex gap-3 items-end mb-4">
              <div
                className={`bg-review-score leading-none text-xl
                    before:content-["★★★★★"] before:tracking-tighter
                    bg-clip-text text-transparent`}
                style={{ '--scorePercentage': reviewScorePercentage }}
              />
              <p className="leading-none font-dm-sans font-medium">
                {product.reviews.length} Reviews
              </p>
            </div>
            <p className="font-dm-sans font-bold text-3xl mb-2 sm:mb-8">
              $
              {product.priceUsd
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
            <div
              className="border-y-[1px] border-primary-300 py-2 sm:py-4 flex
              flex-col gap-3"
            >
              <ProductColorSelector
                colorList={product.colors}
                selectedColorIndex={selectedColorIndex}
                onChangeSelection={handleSwitchSelectedColorIndex}
              />
              <ProductSizeSelector
                sizeList={product.sizes}
                selectedSizeIndex={selectedSizeIndex}
                onChangeSelection={handleSwitchSelectedSizeIndex}
              />
              <div>
                <div className="flex items-end gap-1 max-w-xs">
                  <SpinButton
                    labelText="Quantity"
                    inputId="product-quantity-selector"
                    inputValue={chosenQuantity}
                    onValueChange={handleQuantityChange}
                    className="w-20"
                  />
                  <PrimaryButton>ADD TO CART</PrimaryButton>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconContext.Provider
                  value={{
                    style: { strokeWidth: '0.05rem' },
                    className: 'text-text',
                    size: '1.4rem',
                  }}
                >
                  <BsTruck />
                </IconContext.Provider>
                <p className="font-open-sans">
                  In stock! Ships in 5–10 business days
                </p>
              </div>
            </div>
            <div className="py-2 sm:py-4">
              <p className="font-open-sans">{product.description}</p>
            </div>
            {product.information.map((info, index) => {
              return (
                <div key={index}>
                  <div
                    className="border-t-[1px] border-t-primary-300 py-2 flex
                   justify-between items-center pr-1 cursor-pointer
                   "
                    onClick={() => handleToggleInfoSectionOpen(index)}
                  >
                    <h4 className="font-dm-sans text-xl">
                      {info.header.toUpperCase()}
                    </h4>
                    <button
                      type="button"
                      aria-label={
                        infoDropdownOpenState[index].isOpen
                          ? 'close section'
                          : 'open section'
                      }
                      onClick={() => handleToggleInfoSectionOpen(index)}
                    >
                      <IconContext.Provider
                        value={{
                          style: {
                            strokeWidth: '0.03rem',
                          },
                          size: '1.7rem',
                          className: 'text-primary-700',
                        }}
                      >
                        {infoDropdownOpenState[index].isOpen ? (
                          <BiMinus />
                        ) : (
                          <BiPlus />
                        )}
                      </IconContext.Provider>
                    </button>
                  </div>
                  {infoDropdownOpenState[index].isOpen && (
                    <div className="border-t-[1px] border-t-primary-300 py-2 sm:py-3">
                      <ul className="flex flex-col gap-[2px]">
                        {info.content.map((bulletpoint) => {
                          return (
                            <li
                              className='relative font-open-sans before:content-["·"]
                          before:align-middle before:text-3xl before:leading-6 before:font-open-sans
                          before:absolute before:left-[-0.5em] ml-4'
                            >
                              {bulletpoint[0].toUpperCase() +
                                bulletpoint.slice(1)}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
