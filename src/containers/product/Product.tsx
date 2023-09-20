import resolveConfig from 'tailwindcss/resolveConfig';
import { useState, Dispatch } from 'react';
import { BsTruck } from 'react-icons/bs';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { v4 as uuidv4 } from 'uuid';
import {
  PathDisplay,
  ProductColorSelector,
  ProductSizeSelector,
  ProductCarousel,
  PrimaryButton,
  ReviewScoreStars,
  ReviewSection,
  SpinButton,
} from 'components';
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
} from 'assets';
import { CartActionKind } from 'reducers/cartReducer';
import { formatPriceDollars } from 'helpers';
import styleVars from 'styleVars';
  const smallScreen = styleVars.screens.sm;
  const smallMatches = useMediaQuery(`(min-width: ${smallScreen})`);

  const [product] = useState({
    id: uuidv4(),
    name: 'Adara Bed',
    priceUsd: 1249,
    images: [bed1, bed2, bed3, bed4, bed5, bed6, bed7, bed8, bed9],
    description:
      'A stately bed frame made to fit a serene space. Its subtle winged headboard and trim lines offer crisp sophistication. Bring a bespoke touch to your bedroom with this upholstered bed that suits and elevates a tailored environment.',
    reviewScore: 3.76,
    reviews: [
      {
        username: 'Bob',
        score: 4,
        header: 'BEST BED EVER',
        content: 'I love this bed so much. Makes me sleep like a baby fr fr.',
        datePublished: '2023-03-05T14:17:44+0000',
      },
      {
        username: 'Bed Enjoyer',
        score: 2,
        header: 'Meh',
        content: "Meh I' slept on better.",
        datePublished: '2023-02-20T08:17:44+0000',
      },
      {
        username: 'Bed Enjoyer',
        score: 2,
        header: 'Meh',
        content: "Meh I' slept on better.",
        datePublished: '2023-02-20T08:17:44+0000',
      },
      {
        username: 'Bed Enjoyer',
        score: 2,
        header: 'Meh',
        content: "Meh I' slept on better.",
        datePublished: '2023-02-20T08:17:44+0000',
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
  });

  const [activeImage, setActiveImage] = useState(0);
  // Only set this if the color property exists on the product
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [infoDropdownOpenState, setInfoDropdownOpenState] = useState(
    product.information.map(() => {
      return { isOpen: false };
    })
  );

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
    setSelectedQuantity(nextValue);
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

  function addToCart() {
    cartDispatch({
      type: CartActionKind.ADDED,
      item: {
        id: product.id,
        name: product.name,
        details:
          `${product.colors[selectedColorIndex].name} /` +
          ` ${product.sizes[selectedSizeIndex].name}`,
        image: product.images[0],
        priceUsd: product.priceUsd,
        quantity: selectedQuantity,
      },
    });
  }

  // const product = {
  //   id: uuidv4,
  //   name: 'Adara Bed',
  //   variants: [
  //     ref{
  //       id: uuidv4,
  //       color: ref{
  //         id: uuidv4,
  //         name: 'Navy Velvet',
  //         imageUrl:
  //       },
  //       size: ref{
  //         id: uuidv4,
  //         name: 'King',
  //       },
  //       availableColors: [
  //         refToColorObj,
  //       ],
  //       availableSizes: [
  //         refToSizeObj
  //       ]
  //     }
  //   ]
  // }

  return (
    <div className="px-3 md:px-12">
      <div className="mb-2 sm:mb-5">
        <PathDisplay pathArray={pathToProduct} />
      </div>
      <div className="flex flex-col items-stretch sm:gap-10">
        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(5rem,7%)_minmax(0px,max-content)_minmax(35%,1fr)]
            sm:gap-5
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
                        activeImage === index
                          ? ''
                          : 'opacity-[60%] hover:opacity-100'
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
              <ProductCarousel images={product.images} />
            )}
          </div>
          <div className="flex flex-col sm:ml-4">
            <h1 className="font-dm-sans text-3xl font-medium sm:mt-20">
              {product.name}
            </h1>
            <div className="mb-4 flex items-end gap-3">
              <ReviewScoreStars score={product.reviewScore} />
              <p className="font-dm-sans font-medium leading-none">
                {product.reviews.length} Reviews
              </p>
            </div>
            <p className="mb-2 font-dm-sans text-3xl font-bold sm:mb-8">
              {formatPriceDollars(product.priceUsd)}
            </p>
            <div
              className="flex flex-col gap-3 border-y-[1px] border-primary-300
              py-2 sm:py-4"
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
                <div className="flex max-w-xs items-end gap-1">
                  <div className="flex flex-col items-start ">
                    <label
                      htmlFor="product-quantity-selector"
                      className="mb-1 block font-dm-sans"
                    >
                      Quantity
                    </label>
                    <SpinButton
                      labelText="Quantity"
                      inputId="product-quantity-selector"
                      inputValue={selectedQuantity}
                      onValueChange={handleQuantityChange}
                      className="min-w-[7rem] md:min-w-[5rem]"
                    />
                  </div>
                  <PrimaryButton type="button" onClick={() => addToCart()}>
                    ADD TO CART
                  </PrimaryButton>
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
                    className="flex cursor-pointer items-center justify-between
                   border-t-[1px] border-t-primary-300 py-2 pr-1
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
                              className='relative ml-4 font-open-sans
                          before:absolute before:left-[-0.5em] before:align-middle before:font-open-sans
                          before:text-3xl before:leading-6 before:content-["·"]'
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
        <div className="mb-10">
          <ReviewSection
            reviewArray={product.reviews}
            reviewScore={product.reviewScore}
          />
        </div>
      </div>
    </div>
  );
}
export default Product;
