import { Header } from './containers';
import Search from './components/Search';
import { RecommendedCarousel } from './components';
import './App.css';

function App() {
  return (
    <div className="mx-auto 2xl:mx-[18%] text-text">
      <Header />
      <RecommendedCarousel />
      {/* <Search /> */}
    </div>
  );
}

export default App;
