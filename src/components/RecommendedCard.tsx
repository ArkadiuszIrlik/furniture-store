import { AdaraBed } from '../assets';

function RecommendedCard({ className }) {
  return (
    <div className={`rounded-lg bg-product p-4 ${className}`}>
      <div>
        <img src={AdaraBed} alt="Product" srcSet="" />
      </div>
      <div className="mb-2">
        <p className="font-open-sans font-semibold">Adara Bed</p>
      </div>
      <div className="flex">
        <div className="rounded-2xl bg-primary-300 py-[0.125rem] px-3 ml-auto">
          <p className="font-open-sans font-semibold">$1,149</p>
        </div>
      </div>
    </div>
  );
}
export default RecommendedCard;
