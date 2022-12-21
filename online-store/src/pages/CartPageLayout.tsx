import React, { useState, useEffect } from 'react';
import EmptyCart from '../components/cart/EmptyCart';
import CartItemsContainer from '../components/cart/CartItemsContainer';
import Cart from '../controller/cart/cart';
import { ICartLayout } from '../interfase';

function CartPageLayout (): JSX.Element {
  const cart = new Cart();
  const [cartPageData, setCartPageData] = useState(cart.loadProductsCart().productsCart);
  console.log(cartPageData);
  useEffect(() => {
    console.log('pageLayoutchange', cartPageData);
  }, [cartPageData]);
  return (
    <>
    {cartPageData.length === 0
      ? <EmptyCart/>
      : <CartItemsContainer setCartPageData={setCartPageData}/>}
    </>
  );
}
export default CartPageLayout;
