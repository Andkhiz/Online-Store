import React /*, { useState, useEffect } */ from 'react';
import CartItem from './CartItem';
import CartSummury from './CartSummury';
// import Cart from '../../controller/cart/cart';
import { ICartLayout } from '../../interfase';

export default function CartItemsContainer ({ cartPageData, setCartPageData, totalCartData, setTotalCartData }: ICartLayout): JSX.Element {
  // const cart = new Cart();
  // const cartData = cart.loadProductsCart();
  // const totalCartData = cart.loadTotalCartData();
  // const cartItems = cartPageData/* cartData.productsCart */;
  // const [cartItemsState, setCartItemsState] = useState([/* cartPageData */cartData.productsCart]);
  /* useEffect(() => {
    setCartPageData(cartItemsState);
  }, [cartItemsState]); */
  console.log('CartItemsContainer');
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
        {cartPageData.map((el) => <CartItem
          key={el.id}
          product={el}
          setTotalCartData={setTotalCartData}
          cartPageData={cartPageData}
          totalCartData={totalCartData}
          setCartPageData={setCartPageData}
          />)}
      </div>
      </div>
      <CartSummury {...totalCartData}/>
    </main>
  );
}
