'use client';
import Link from 'next/link';
import { FooterCategory } from 'containers/footer/Footer';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { BiMinus, BiPlus } from 'assets/react-icons';

function FooterMobile({ categories }: { categories: FooterCategory[] }) {
  const [openStatusList, setOpenStatusList] = useState(
    categories.map(() => {
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
    <footer className="mt-auto">
      <div
        className="flex flex-col items-stretch justify-start
          bg-primary-300 font-dm-sans text-lg text-text"
      >
        {categories.map((category, index) => {
          return (
            <nav className="flex flex-col" key={index}>
              <div
                className="flex items-center justify-between border-b-[1px]
                         border-b-primary-700 px-4 py-2"
                onClick={() => handleToggleOpenStatus(index)}
              >
                <h3 className="mb-1 text-lg font-bold md:text-xl">
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
                    border-b-[1px] border-b-primary-700 bg-primary-400 px-4
                    py-3`}
              >
                <ul className="flex flex-col gap-1">
                  {category.items.map((item, i) => {
                    if (category.header === 'Customer Support') {
                      return <li key={i}>{item}</li>;
                    }
                    return (
                      <li key={i}>
                        <Link href="#">{item}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          );
        })}
      </div>
    </footer>
  );
}
export default FooterMobile;
