import React, { useState, useEffect } from 'react';
import EmptyCart from '../components/cart/EmptyCart';
import CartItemsContainer from '../components/cart/CartItemsContainer';
import { ICartLayout } from '../interfase';

function CartPage ({ setCartPageData, cartPageData }: ICartLayout): JSX.Element {
  return (
    <>
    {cartPageData.length === 0
      ? <EmptyCart/>
      : <CartItemsContainer setCartPageData={setCartPageData} cartPageData={cartPageData}/>}
    </>
  );
}
export default CartPage;
