import { Header, Home, Category, Footer } from './containers';
import Search from './components/Search';
import { RecommendedCarousel } from './components';
import './App.css';

function App() {
  return (
    <div className="mx-auto 2xl:mx-[18%] min-h-screen text-text flex flex-col">
      <Header />
      {/* <Category /> */}
      {/* <Home /> */}
      {/* <RecommendedCarousel /> */}
      {/* <Search /> */}
      <Footer />
    </div>
  );
}

export default App;
