import React from 'react';
import EmptyCart from '../components/cart/EmptyCart';
import CartItemsContainer from '../components/cart/CartItemsContainer';
import Cart from '../controller/cart/cart';

function CartPage (): JSX.Element {
  const cart = new Cart();
  const cartData = cart.loadProductsCart();
  console.log(cartData);
  return (
    <>
    {cartData.productsCart.length > 0
      ? <CartItemsContainer/>
      : <EmptyCart/>}
    </>
  );
}
export default CartPage;
