import {
  HomeFeaturesSection,
  HomePhotosSection,
  InstagramCarousel,
} from 'components';
import { Footer } from 'containers';

export default function Page() {
  return (
    <div>
      <HomeFeaturesSection />
      <div className="mb-12 px-0 sm:px-10">
        <HomePhotosSection />
      </div>
      <p className="mb-4 text-center text-3xl">
        GET INSPIRED WITH #ELEVAFAMILY
      </p>
      <div className="mb-14">
        <InstagramCarousel />
      </div>
      <Footer />
    </div>
  );
}
