import { Delivery, Swatch, ProductReturns, DelayedPayment } from 'assets';
import { HomeFeaturesCard } from 'components';

function HomeFeaturesSection() {
  return (
    <div
      className="flex justify-center bg-accents-700 px-4 py-9 
          sm:px-10 sm:py-14 md:py-20"
    >
      <div
        className="flex flex-col
          items-stretch justify-center gap-x-2 gap-y-12
           sm:grid sm:grid-cols-2 sm:flex-row
           sm:justify-items-center md:flex md:items-start md:gap-5
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
export default HomeFeaturesSection;
