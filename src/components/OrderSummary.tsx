function OrderSummary() {
  return (
    <div className="font-dm-sans">
      <h3
        className="border-b-[1px] border-b-primary-300 text-2xl pb-1
         text-center px-3"
      >
        ORDER SUMMARY
      </h3>
      <div
        className="py-2 border-b-[1px] border-b-primary-300 flex flex-col
      px-3 gap-[1px]"
      >
        <div className="flex justify-between">
          <p>SUBTOTAL:</p>
          <p>$1,348</p>
        </div>
        <div className="flex justify-between">
          <p>SHIPPING*:</p>
          <p>$89</p>
        </div>
        <div className="flex justify-between">
          <p>TAX*:</p>
          <p>$159.50</p>
        </div>
      </div>
      <div className="flex justify-between font-medium px-3 pt-2">
        <p>ESTIMATED TOTAL:</p>
        <p>$1615.50</p>
      </div>
      <p className="font-open-sans text-sm text-neutral-500 text-center px-3">
        * Shipping and tax estimated for 90001 based on your location
      </p>
    </div>
  );
}
export default OrderSummary;
