function CheckoutRadioNarrow({ children, label, ...props }) {
  return (
    <label
      htmlFor={props.id}
      className={`flex gap-5 rounded-xl border-2 ${
        props.checked
          ? 'border-primary-700'
          : 'border-zinc-400 hover:bg-zinc-100/75 hover:border-primary-700'
      } px-5 py-2 cursor-pointer group
    rounded-lg border-2 border-primary-700 w-[40rem]
   focus-within:outline outline-offset-2
    `}
      aria-label={label}
    >
      <div className="flex justify-center items-center">
        <div
          className={`w-5 aspect-square rounded-full border-2 
        flex justify-center items-center ${
          props.checked
            ? 'border-primary-700 bg-primary-700'
            : 'border-zinc-400 group-hover:border-primary-700'
        }`}
        >
          {props.checked && (
            <div className="w-[0.4rem] aspect-square rounded-full bg-white" />
          )}
        </div>
      </div>
      <div className="grow">{children}</div>
      <input type="radio" {...props} className="sr-only" />
    </label>
  );
}
export default CheckoutRadioNarrow;
