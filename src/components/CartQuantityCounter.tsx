function CartQuantityCounter({ quantity }: { quantity: number }) {
  return quantity ? (
    <div
      className="absolute bg-accents-700 rounded-full aspect-square min-w-[1.5rem] min-h-0 
             p-1 right-0 bottom-0 translate-x-[40%] translate-y-[80%] md:translate-x-[60%] md:translate-y-[60%] flex
             justify-center items-center"
    >
      <p className="font-dm-sans font-medium text-base text-white">
        {quantity}
      </p>
    </div>
  ) : undefined;
}

export default CartQuantityCounter;
