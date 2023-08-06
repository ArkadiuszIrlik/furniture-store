function ProductSizeSelector({
  sizeList,
  selectedSizeIndex,
  onChangeSelection,
}: {
  // sizeList: any[];
  selectedSizeIndex: number;
  onChangeSelection: (sizeIndex: number) => void;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-1">
        <fieldset className="flex flex-wrap gap-1">
          <legend className="mb-1 font-dm-sans">
            Select Size -{' '}
            <span className="font-medium" aria-hidden="true">
              {sizeList[selectedSizeIndex].name}
            </span>
          </legend>
          {sizeList.map((size, index) => {
            return (
              <div className="flex">
                <label
                  className={`flex-auto cursor-pointer rounded-lg
                   border-[1px] px-2 py-1 font-dm-sans ${
                     index === selectedSizeIndex
                       ? 'border-primary-700 bg-primary-700 text-white'
                       : `border-text text-text hover:border-primary-700
                        hover:bg-primary-700 hover:text-white`
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
