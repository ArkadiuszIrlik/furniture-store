function PasswordStrengthDisplay({ password }) {
  const { score } = zxcvbn(password);
  const scoreFeedback = {
    0: { message: 'Very Weak', color: 'bg-red-500' },
    1: { message: 'Weak', color: 'bg-amber-500' },
    2: { message: 'Okay', color: 'bg-yellow-300' },
    3: { message: 'Strong', color: 'bg-lime-400' },
    4: { message: 'Very Strong', color: 'bg-green-600' },
  };
  return (
    <div>
      <div className="grid grid-cols-5 h-1 max-w-xs gap-1">
        {[...Array(5)].map((el, index) => (
          <div
            className={`${
              index <= score ? scoreFeedback[score].color : 'bg-gray-300'
            } rounded-lg`}
            key={index}
          />
        ))}
      </div>
      <p>{scoreFeedback[score].message}</p>
    </div>
  );
}
export default PasswordStrengthDisplay;
