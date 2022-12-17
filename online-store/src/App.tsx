import React from 'react';
import './App.scss';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';

function App (): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <CartPage/>
    </div>
  );
}
export default App;
