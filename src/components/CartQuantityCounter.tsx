import { useState, useEffect } from 'react';

function CartQuantityCounter() {
  const [cartQuantity, setCartQuantity] = useState(0);

  function getCartQuantity() {
    if (!localStorage.getItem('cart')) {
      return 0;
    }
    const cart = JSON.parse(localStorage.getItem('cart'));
    return Object.values(cart)
      .map((product) => {
        return product.quantity;
      })
      .reduce((a, b) => a + b, 0);
  }

  useEffect(() => {
    const handleStorage = () => {
      setCartQuantity(getCartQuantity());
    };
    handleStorage();
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  return (
    <>
      {!!cartQuantity && (
        <div
          className="absolute bg-accents-700 rounded-full aspect-square min-w-[1.5rem] min-h-0 
             p-1 right-0 bottom-0 translate-x-[40%] translate-y-[80%] md:translate-x-[60%] md:translate-y-[60%] flex
             justify-center items-center"
        >
          <p className="font-dm-sans font-medium text-base text-white">
            {cartQuantity}
          </p>
        </div>
      )}
    </>
  );
}

export default CartQuantityCounter;
