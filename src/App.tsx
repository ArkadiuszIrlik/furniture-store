import { Header, Home, Category, Footer, Product } from './containers';
import { RecommendedCarousel, Search, PrimaryButton } from './components';
import './App.css';

function App() {
  return (
    <div className="mx-auto lg:mx-[8%] xl:mx-[14%] 2xl:mx-auto 2xl:max-w-[1800px] min-h-screen text-text flex flex-col">
      <Header />
      {/* <Category /> */}
      <Product />
      {/* <Home /> */}
      {/* <RecommendedCarousel /> */}
      {/* <Search /> */}
      <Footer />
    </div>
  );
}

export default App;
