import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import LayoutPage from './pages/LayoutPage';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import Cart from './controller/cart/cart';
import { loadProductsCart } from './controller/cart/loadProductCart';
import { loadTotalCartData } from './controller/cart/loadTotalCartData';

import { IProduct, IProductDB, ICartTotal } from './interfase';

function App (): JSX.Element {
  console.log('Вызываем app');
  const [cartPageData, setCartPageData] = useState<IProduct []>([]);
  const [totalCartData, setTotalCartData] = useState<ICartTotal>(loadTotalCartData());
  // const cart = new Cart();
  // const [cartPageData, setCartPageData] = useState(cart.loadProductsCart().productsCart);
  console.log('App');
  console.log(cartPageData);
  const loadData = function (): void {
    fetch('db.json', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (responce: Response) => {
        if (!responce.ok) throw new Error(responce.statusText);
        return await responce.json();
      })
      .then((result) => { console.log('result'); console.log(result); return loadProductsCart(result); })
      .then(resu => { console.log('resu'); console.log(resu); setCartPageData(resu.productsCart); })
      .catch(error => { throw Error(error); });
  };

  useEffect(() => { loadData(); }, []);
  // useEffect(() => { setTotalCartData(loadTotalCartData()); }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={
            <MainPage
              cartPageData={cartPageData}
              setCartPageData={setCartPageData}
              totalCartData={totalCartData}
              setTotalCartData={setTotalCartData}
            />}
          />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={
            <CartPage
              cartPageData={cartPageData}
              setCartPageData={setCartPageData}
              totalCartData={totalCartData}
              setTotalCartData={setTotalCartData}
            />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
