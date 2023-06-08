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
              <div className="flex relative">
                <label
                  className={`rounded-lg border-2 overflow-hidden 
                  cursor-pointer hover:border-primary-700
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
                    className={`peer ${
                      index === selectedColorIndex ? 'p-1' : ''
                    } hover:p-1 w-12 aspect-square rounded-lg`}
                    draggable="false"
                  />
                  <p
                    className="hidden peer-hover:block absolute top-[110%] left-1/2
                    bg-primary-300 text-sm w-max px-1 -translate-x-1/2 font-dm-sans"
                    aria-hidden="true"
                  >
                    {color.name}
                  </p>
                </label>
              </div>
            );
          })}
        </fieldset>
      </div>
    </div>
  );
}
export default ProductColorSelector;
