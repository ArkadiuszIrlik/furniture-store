import { Delivery, Swatch, ProductReturns, DelayedPayment } from '../../assets';
import { HomeFeaturesCard } from '../../components';

function Home() {
  return (
    <div className="flex justify-center bg-accents-700 px-4 py-9 sm:px-10 sm:py-14 md:py-20">
      <div
        className="md:flex md:items-start
        sm:grid sm:grid-cols-2 justify-center sm:justify-items-center 
         gap-x-2 gap-y-12 md:gap-5
         flex flex-col items-stretch sm:flex-row
         "
      >
        <HomeFeaturesCard
          header="FLAT RATE SHIPPING*"
          para="Delivery calculated per shipment"
          image={Delivery}
          imageAlt="Product delivery"
        />
        <HomeFeaturesCard
          header="14-DAY RETURNS"
          para="Two weeks to fall in love"
          image={ProductReturns}
          imageAlt="Product returns"
        />
        <HomeFeaturesCard
          header="PAY OVER TIME"
          para="In auto monthly installments"
          image={DelayedPayment}
          imageAlt="Delayed payment"
        />
        <HomeFeaturesCard
          header="FREE SWATCHES"
          para="We encourage pickiness"
          image={Swatch}
          imageAlt="Fabric swatch"
        />
      </div>
    </div>
  );
}
export default Home;
