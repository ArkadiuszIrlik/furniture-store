import Image from 'next/image';

function ProductColorSelector({
  colorList,
  selectedColorIndex,
  onChangeSelection,
}: {
  // colorList: any[];
  selectedColorIndex: number;
  onChangeSelection: (colorIndex: number) => void;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-1">
        <fieldset className="flex flex-wrap gap-1">
          <legend className="mb-1 font-dm-sans">
            Select Color -{' '}
            <span className="font-medium" aria-hidden="true">
              {colorList[selectedColorIndex].name}
            </span>
          </legend>
          {colorList.map((color, index) => {
            return (
              <div className="relative flex">
                <label
                  className={`cursor-pointer overflow-hidden rounded-lg 
                  border-2 hover:border-primary-700
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
                  <Image
                    src={color.image}
                    alt=""
                    className={`peer ${
                      index === selectedColorIndex ? 'p-1' : ''
                    } aspect-square w-12 rounded-lg hover:p-1`}
                    draggable="false"
                  />
                  <p
                    className="absolute left-1/2 top-[110%] hidden w-max
                    -translate-x-1/2 bg-primary-300 px-1 font-dm-sans text-sm peer-hover:block"
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
