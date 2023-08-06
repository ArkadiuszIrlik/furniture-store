import Link from 'next/link';

function HeaderNavbar() {
  return (
    <nav>
      <ul className="flex justify-between text-sm">
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
    </nav>
  );
}

export default HeaderNavbar;
