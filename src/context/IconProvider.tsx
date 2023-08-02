'use client';

import { IconContext } from 'react-icons';

function IconProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: IconContext;
}) {
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
}
export default IconProvider;
