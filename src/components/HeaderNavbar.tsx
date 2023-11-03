'use client';

import Link from 'next/link';
import { useState } from 'react';
import categories from 'productCategories.json';

function HeaderNavbar() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(
    null
  );

  let categoryOpenTimeoutId: ReturnType<typeof setTimeout>;
  async function handleOpenCategorySubmenu(index: number) {
    if (openCategoryIndex === null) {
      await new Promise((res) => {
        categoryOpenTimeoutId = setTimeout(res, 250);
      });
    }
    setOpenCategoryIndex(index);
  }

  function handleCloseCategorySubmenu() {
    setOpenCategoryIndex(null);
  }

  function handleToggleCategorySubmenu(index: number) {
    if (openCategoryIndex === index) {
      setOpenCategoryIndex(null);
    } else {
      setOpenCategoryIndex(index);
    }
  }

  return (
    <nav
      aria-label="main"
      className="relative"
      onMouseLeave={() => {
        handleCloseCategorySubmenu();
      }}
    >
      {/* <div
        className={`relative z-30 py-2 ${
          openCategoryIndex !== null
            ? 'shadow-[0_0.2rem_0.2rem_0.2rem_rgba(0,0,0,0.08)]'
            : ''
        }`}
      > */}
      <div className="relative z-30 py-2">
        <ul className="relative flex justify-between overflow-x-clip px-1 text-sm">
          {categories.map((category, index) => {
            const isOpen = openCategoryIndex === index;
            return (
              <li
                key={category.name}
                className="relative"
                onMouseEnter={() => handleOpenCategorySubmenu(index)}
                onMouseLeave={() => clearTimeout(categoryOpenTimeoutId)}
              >
                <Link
                  href={category.url}
                  aria-expanded={isOpen}
                  className={`relative underline-offset-2 hover:underline ${
                    isOpen ? 'underline' : ''
                  }`}
                >
                  {category.name.toUpperCase()}
                </Link>
                <button
                  type="button"
                  aria-label={`${isOpen ? 'hide' : 'show'} submenu for ${
                    category.name
                  }`}
                  aria-expanded={isOpen}
                  onClick={() => handleToggleCategorySubmenu(index)}
                  className="absolute left-0 top-0 -z-10 h-full w-full outline-2 focus:outline-dashed"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`${
          openCategoryIndex !== null ? 'block' : 'hidden'
        } absolute top-full z-20
              w-full 
              shadow-lg
              `}
        // flex w-full justify-start gap-5
        // shadow-[inset_0px_10px_10px_-6px_rgba(0,0,0,0.08)]
      >
        <div
          className="flex w-full flex-grow gap-5 bg-white px-10 py-5
        "
          // shadow-[inset_0px_10px_10px_-5px_rgba(0,0,0,0.08)]
        >
          {openCategoryIndex !== null && (
            <div className="flex">
              <div className="w-32 border-r-[1px] border-primary-400 pr-5">
                <section>
                  <ul className="flex flex-col gap-1 font-open-sans leading-tight">
                    {categories[openCategoryIndex].sideLinks.map((sideLink) => {
                      return (
                        <li key={sideLink.header}>
                          <Link
                            href={sideLink.url}
                            className="underline-offset-2 hover:underline"
                          >
                            {sideLink.header}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </div>
              <div className="columns-4 pl-5">
                {/* <div className="grid grid-cols-4 grid-rows-[masonry] pl-5"> */}
                {categories[openCategoryIndex].subcategories.map((subCat) => (
                  <section
                    className="mb-2 break-inside-avoid"
                    key={subCat.name}
                  >
                    <h3 className="mb-1 leading-tight text-primary-700">
                      {subCat.name.toUpperCase()}
                    </h3>
                    <ul className="flex flex-col">
                      {subCat.subcategories.map((subSubCat) => {
                        return (
                          <li key={subSubCat.name}>
                            <Link
                              href={subSubCat.url}
                              className="font-open-sans underline-offset-2 hover:underline"
                            >
                              {subSubCat.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HeaderNavbar;
