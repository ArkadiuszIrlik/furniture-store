function Footer() {
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

  return (
    <div className="mt-auto bg-primary-300 text-text flex gap-5 justify-evenly items-start px-5 py-5 font-dm-sans text-lg">
      {categories.map((category, index) => {
        return (
          <nav className="flex flex-col" key={index}>
            <h3 className="font-bold text-xl mb-1">{category.header}</h3>
            <ul>
              {category.items.map((item, i) => {
                return (
                  <li key={i}>
                    <a href="">{item}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        );
      })}
    </div>
  );
}
export default Footer;
