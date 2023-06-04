function ProductColorSelector({
  colorList,
  selectedColorIndex,
  onChangeSelection,
}: {
  colorList: any[];
  selectedColorIndex: number;
  onChangeSelection: () => any;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-1">
        <fieldset className="flex flex-wrap gap-1">
          <legend className="font-dm-sans mb-1">
            Select Color -{' '}
            <span className="font-medium" aria-hidden="true">
              {colorList[selectedColorIndex].name}
            </span>
          </legend>
          {colorList.map((color, index) => {
            return (
              <label
                className={`rounded-lg border-2 overflow-hidden cursor-pointer
                    ${
                      index === selectedColorIndex
                        ? 'border-primary-700'
                        : 'border-white'
                    } `}
                htmlFor={`input-color-${color.name}`}
                aria-label={color.name}
              >
                <input
                  type="radio"
                  name="product-color-selection"
                  id={`input-color-${color.name}`}
                  value={index}
                  checked={index === selectedColorIndex}
                  className="sr-only"
                  onChange={() => onChangeSelection(index)}
                />
                <img
                  src={color.image}
                  alt=""
                  srcSet=""
                  className={`${
                    index === selectedColorIndex ? 'p-1' : ''
                  } w-12 aspect-square rounded-lg`}
                  draggable="false"
                />
              </label>
            );
          })}
        </fieldset>
      </div>
    </div>
  );
}
export default ProductColorSelector;
