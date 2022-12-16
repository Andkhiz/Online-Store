import React from 'react';
import './App.scss';
import Header from './components/Header';
import MainPage from './components/MainPage';
import CartPage from './components/CartPage';
import ProductPage from './components/ProductPage';
import ErrorPage from './components/ErrorPage';

function App (): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <CartPage/>
    </div>
  );
}
export default App;
