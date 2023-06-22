function PrimaryButton({
  children,
  className = '',
  isFilled = 'true',
  onClick = () => undefined,
  type = 'button',
  isDisabled = false,
}: {
  children?: any;
  isFilled?: 'true' | 'false';
  className?: string;
  onClick?: any;
  type: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
}) {
  let conditionalClassName;
  if (isDisabled) {
    conditionalClassName = 'bg-gray-200 text-gray-500 border-gray-200';
  } else if (isFilled === 'true') {
    conditionalClassName = 'bg-primary-700 border-primary-700 text-white';
  } else {
    conditionalClassName = 'border-primary-700 text-primary-700';
  }
  return (
    <button
      type={type}
      className={`rounded-lg border-2 font-dm-sans
       font-medium px-2 py-2 flex-auto ${conditionalClassName} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
export default PrimaryButton;
