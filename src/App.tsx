import { Header, Home, Category, Footer, Product } from './containers';
import { RecommendedCarousel, Search, PrimaryButton } from './components';
import './App.css';

function App() {
  return (
    <div className="mx-auto 2xl:mx-[18%] min-h-screen text-text flex flex-col">
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
