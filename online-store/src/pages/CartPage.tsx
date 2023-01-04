import React/*, { useState, useEffect } */ from 'react';
import EmptyCart from '../components/cart/EmptyCart';
import CartItemsContainer from '../components/cart/CartItemsContainer';
import { ICartLayout } from '../interfase';

function CartPage ({ setCartPageData, cartPageData, totalCartData, setTotalCartData, getQueryParams }: ICartLayout): JSX.Element {
  return (
    <>
    {cartPageData.length === 0
      ? <EmptyCart/>
      : <CartItemsContainer
          setCartPageData={setCartPageData}
          cartPageData={cartPageData}
          totalCartData={totalCartData}
          setTotalCartData={setTotalCartData}
          getQueryParams={getQueryParams}
        />}
    </>
  );
}
export default CartPage;
