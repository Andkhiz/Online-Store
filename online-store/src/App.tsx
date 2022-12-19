import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import LayoutPage from './pages/LayoutPage';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';

function App (): JSX.Element {
  console.log('Вызываем app');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<MainPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
