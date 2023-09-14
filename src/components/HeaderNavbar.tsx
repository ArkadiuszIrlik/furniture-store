'use client';

import Link from 'next/link';
import { useState } from 'react';

const categories = [
  {
    header: 'furniture',
    url: '/furniture',
    subcategories: [
      { header: 'garden furniture', url: '/garden' },
      { header: 'bathroom', url: '/bathroom' },
    ],
  },
];

function HeaderNavbar() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(
    null
  );

  function handleOpenCategorySubmenu(index: number) {
    setOpenCategoryIndex(index);
  }

  function handleCloseCategorySubmenu() {
    setOpenCategoryIndex(null);
  }

  function handleToggleCategorySubmenu(index: number) {
    if (openCategoryIndex !== null) {
      setOpenCategoryIndex(null);
    } else {
      setOpenCategoryIndex(index);
    }
  }

  return (
    <nav
      aria-label="main"
      className="relative"
      onMouseLeave={() => handleCloseCategorySubmenu()}
    >
      <div
        className={`relative z-30 py-2 ${
          openCategoryIndex !== null
            ? 'shadow-[0_0.2rem_0.2rem_0.2rem_rgba(0,0,0,0.08)]'
            : ''
        }`}
      >
        <ul className="relative flex justify-between overflow-x-clip px-1 text-sm">
          {categories.map((category, index) => {
            const isOpen = openCategoryIndex === index;
            return (
              <li
                key={category.header}
                className="relative"
                onMouseEnter={() => handleOpenCategorySubmenu(index)}
              >
                <Link
                  href={category.url}
                  aria-expanded={isOpen}
                  className={`relative underline-offset-2 hover:underline ${
                    isOpen ? 'underline' : ''
                  }`}
                >
                  {category.header.toUpperCase()}
                  <button
                    type="button"
                    aria-label={`${isOpen ? 'hide' : 'show'} submenu for ${
                      category.header
                    }`}
                    aria-expanded={isOpen}
                    onClick={() => handleToggleCategorySubmenu(index)}
                    className="absolute left-0 top-0 -z-10 h-full w-full outline-2 focus:outline-dashed"
                  ></button>
                </Link>
              </li>
            );
          })}
          <li>NEW</li>
          <li>RUGS</li>
          <li>
            <Link href={'/furniture'}>FURNITURE</Link>
          </li>
          <li>OUTDOOR</li>
          <li>PILLOWS & THROWS</li>
          <li>
            <Link href={'/lighting'}>LIGHTING</Link>
          </li>
          <li>WALLS</li>
          <li>
            <Link href={'/decor'}>DÉCOR</Link>
          </li>
          <li>BED & BATH</li>
          <li>KITCHEN & DINING</li>
        </ul>
      </div>
      <div
        className={`${
          openCategoryIndex !== null ? 'block' : 'hidden'
        } absolute top-full
              z-20 flex h-64 w-full justify-around gap-5 bg-white
              `}
        // shadow-[inset_0px_10px_10px_-6px_rgba(0,0,0,0.08)]
      >
        {openCategoryIndex !== null &&
          categories[openCategoryIndex].subcategories.map((subCat) => (
            <Link href={subCat.url}>{subCat.header}</Link>
          ))}
      </div>
    </nav>
  );
}

export default HeaderNavbar;
