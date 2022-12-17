import React from 'react';
import CartItem from '../components/cart/CartItem';
import CartSummury from '../components/cart/CartSummury';

function CartPage (): JSX.Element {
  return (
    <main className='cart'>
      <div className="cart-items-conrainer">
        <div className="cart-items-header">
          <h2>products in cart</h2>
          <div className="cart-state">
            <p>items</p>
            <p>page</p>
          </div>
        </div>
        <div className="cart-items-body">
          <CartItem/>
          <CartItem/>
        </div>
      </div>
      <CartSummury/>
    </main>
  );
}
export default CartPage;
