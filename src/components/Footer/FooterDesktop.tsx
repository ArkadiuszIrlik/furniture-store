import { FooterCategory } from 'containers/footer/Footer';
import Link from 'next/link';

function FooterDesktop({ categories }: { categories: FooterCategory[] }) {
  return (
    <footer className="mt-auto">
      <div
        className="flex items-start justify-evenly gap-5
              bg-primary-300 px-5 py-5 font-dm-sans text-lg text-text"
      >
        {categories.map((category, index) => {
          return (
            <nav className="flex flex-col" key={index}>
              <h3 className="mb-1 text-xl font-bold">{category.header}</h3>
              <ul>
                {category.items.map((item, i) => {
                  if (category.header === 'Customer Support') {
                    return <li key={i}>{item}</li>;
                  }
                  return (
                    <li key={i}>
                      <Link
                        href="#"
                        className="underline-offset-2 hover:underline"
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          );
        })}
      </div>
    </footer>
  );
}
export default FooterDesktop;
