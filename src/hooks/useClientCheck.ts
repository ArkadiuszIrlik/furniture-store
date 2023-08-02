import { useEffect, useState } from 'react';

export default function useClientCheck() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
