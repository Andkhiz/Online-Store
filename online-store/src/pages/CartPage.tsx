import React from 'react';
import CartItem from '../components/cart/CartItem';
import CartSummury from '../components/cart/CartSummury';
// import Cart from '../controller/cart/cart';
import { ILoaderClassObj } from '../interfase';

function CartPage (loader: ILoaderClassObj): JSX.Element {
  // const cart = new Cart();
  // const cart = loader.loader.Cart;
  const cartData = loader.loader.Cart.loadProductsCart();
  const totalCartData = loader.loader.Cart.loadTotalCartData();
  console.log(totalCartData);
  return (
    <main className='cart'>
      <div className="cart-items-conrainer">
        <div className="cart-items-header">
          <h2>products in cart</h2>
          <div className="cart-state">
            <p>items {totalCartData.totalCount}</p>
            <p>page: 1</p>
          </div>
        </div>
        <div className="cart-items-body">
          {cartData.productsCart.map((el) => <CartItem
            key={el.id}
            { ...el }
            />)}
        </div>
      </div>
      <CartSummury totalPrice={totalCartData.totalSum}/>
    </main>
  );
}
export default CartPage;
