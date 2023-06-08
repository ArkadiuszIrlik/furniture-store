function ProductSizeSelector({
  sizeList,
  selectedSizeIndex,
  onChangeSelection,
}: {
  sizeList: any[];
  selectedSizeIndex: number;
  onChangeSelection: () => any;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-1">
        <fieldset className="flex flex-wrap gap-1">
          <legend className="font-dm-sans mb-1">
            Select Size -{' '}
            <span className="font-medium" aria-hidden="true">
              {sizeList[selectedSizeIndex].name}
            </span>
          </legend>
          {sizeList.map((size, index) => {
            return (
              <div className="flex">
                <label
                  className={`rounded-lg border-[1px] font-dm-sans
                   px-2 py-1 flex-auto cursor-pointer ${
                     index === selectedSizeIndex
                       ? 'bg-primary-700 text-white border-primary-700'
                       : `text-text border-text hover:bg-primary-700
                        hover:text-white hover:border-primary-700`
                   }`}
                  htmlFor={`input-size-${size.name}`}
                  aria-label={size.name}
                >
                  {size.name}
                  <input
                    type="radio"
                    name="product-size-selection"
                    id={`input-size-${size.name}`}
                    value={index}
                    checked={index === selectedSizeIndex}
                    className="sr-only"
                    onChange={() => onChangeSelection(index)}
                  />
                </label>
              </div>
            );
          })}
        </fieldset>
      </div>
    </div>
  );
}
export default ProductSizeSelector;
