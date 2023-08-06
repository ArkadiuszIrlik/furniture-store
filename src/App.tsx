import { useState, useEffect, useReducer } from 'react';
import {
  Checkout,
  CheckoutInformation,
  Header,
  Home,
  Category,
  Footer,
  Product,
  ShoppingCart,
} from './containers';
import { RecommendedCarousel, Search, PrimaryButton } from './components';
import './App.css';
import { cartReducer } from './reducers';

function App() {
  const [cart, cartDispatch] = useReducer(
    cartReducer,
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="mx-auto lg:mx-[8%] xl:mx-[14%] 2xl:mx-auto 2xl:max-w-[1800px] min-h-screen text-text flex flex-col">
      <Header cart={cart} cartDispatch={cartDispatch} />
      {/* <Category /> */}
      {/* <Product cartDispatch={cartDispatch} /> */}
      {/* <Checkout /> */}
      <CheckoutInformation />
      {/* <ShoppingCart /> */}
      {/* <Home /> */}
      {/* <RecommendedCarousel /> */}
      {/* <Search /> */}
      <Footer />
    </div>
  );
}

export default App;
