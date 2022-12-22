import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import LayoutPage from './pages/LayoutPage';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import Cart from './controller/cart/cart';

function App (): JSX.Element {
  console.log('Вызываем app');
  const cart = new Cart();
  const [cartPageData, setCartPageData] = useState(cart.loadProductsCart().productsCart);
  console.log(cartPageData);
  useEffect(() => {
    console.log('pageLayoutchange', cartPageData);
  }, [cartPageData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<MainPage cartPageData={cartPageData} setCartPageData={setCartPageData}/>} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage cartPageData={cartPageData} setCartPageData={setCartPageData} />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
