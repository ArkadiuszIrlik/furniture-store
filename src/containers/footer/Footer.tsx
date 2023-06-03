import { BsPlusLg } from 'react-icons/bs';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';
import { useMediaQuery } from '../../hooks';

function Footer() {
  const fullConfig = resolveConfig(tailwindConfig);
  const mediumScreen = fullConfig.theme.screens.md;
  const mediumMatches = useMediaQuery(`(min-width: ${mediumScreen})`);

  const categories = [
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

  const [openStatusList, setOpenStatusList] = useState(
    categories.map((category) => {
      return { isOpen: false };
    })
  );

  function handleToggleOpenStatus(index: number) {
    setOpenStatusList(
      openStatusList.map((el, i) => {
        if (i === index) {
          return { ...el, isOpen: !el.isOpen };
        }
        return el;
      })
    );
  }

  return (
    <div>
      {mediumMatches ? (
        <div
          className="mt-auto bg-primary-300 text-text flex gap-5
            justify-evenly items-start px-5 py-5 font-dm-sans text-lg"
        >
          {categories.map((category, index) => {
            return (
              <nav className="flex flex-col" key={index}>
                <h3 className="font-bold text-xl mb-1">{category.header}</h3>
                <ul>
                  {category.items.map((item, i) => {
                    if (category.header === 'Customer Support') {
                      return <li key={i}>{item}</li>;
                    }
                    return (
                      <li key={i}>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          })}
        </div>
      ) : (
        <div
          className="mt-auto bg-primary-300 text-text flex flex-col
        justify-start items-stretch font-dm-sans text-lg"
        >
          {categories.map((category, index) => {
            return (
              <nav className="flex flex-col" key={index}>
                <div
                  className="flex justify-between items-center border-b-[1px]
                       border-b-primary-700 px-4 py-2"
                  onClick={() => handleToggleOpenStatus(index)}
                >
                  <h3 className="font-bold text-lg md:text-xl mb-1">
                    {category.header}
                  </h3>
                  <button
                    type="button"
                    aria-label={
                      openStatusList[index].isOpen ? 'hide links' : 'show links'
                    }
                    onClick={() => handleToggleOpenStatus(index)}
                  >
                    {openStatusList[index].isOpen ? (
                      <IconContext.Provider
                        value={{
                          style: { strokeWidth: '0.05rem' },
                          className: 'text-text',
                          size: '1.5rem',
                        }}
                      >
                        <BiMinus />
                      </IconContext.Provider>
                    ) : (
                      <IconContext.Provider
                        value={{
                          style: { strokeWidth: '0.05rem' },
                          className: 'text-text',
                          size: '1.5rem',
                        }}
                      >
                        <BiPlus />
                      </IconContext.Provider>
                    )}
                  </button>
                </div>
                <div
                  className={`${openStatusList[index].isOpen ? '' : 'hidden'}
                  px-4 py-3 border-b-[1px] border-b-primary-700
                  bg-primary-400`}
                >
                  <ul className="flex flex-col gap-1">
                    {category.items.map((item, i) => {
                      if (category.header === 'Customer Support') {
                        return <li key={i}>{item}</li>;
                      }
                      return (
                        <li key={i}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Footer;
