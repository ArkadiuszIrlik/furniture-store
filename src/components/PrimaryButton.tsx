function PrimaryButton({
  children,
  className = '',
  isFilled = 'true',
  onClick = () => undefined,
}: {
  children?: any;
  isFilled?: 'true' | 'false';
  className?: string;
  onClick?: any;
}) {
  return (
    <button
      type="button"
      className={`rounded-lg border-2 border-primary-700 font-dm-sans
       font-medium px-2 py-2 flex-auto ${
         isFilled === 'true' ? 'bg-primary-700 text-white' : 'text-primary-700'
       } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default PrimaryButton;
