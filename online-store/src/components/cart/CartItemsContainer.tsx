import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CartSummury from './CartSummury';
import Cart from '../../controller/cart/cart';
import { ICartLayout } from '../../interfase';

export default function CartItemsContainer ({ setCartPageData }: ICartLayout): JSX.Element {
  const cart = new Cart();
  const cartData = cart.loadProductsCart();
  const totalCartData = cart.loadTotalCartData();
  const cartItems = cartData.productsCart;
  const [cartItemsState, setCartItemsState] = useState([cartData.productsCart]);
  useEffect(() => {
    setCartPageData(cartItemsState);
  }, [cartItemsState]);

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
        {cartItems.map((el) => <CartItem
          key={el.id}
          id={el.id}
          title={el.title}
          description={el.description}
          discountPercentage={el.discountPercentage}
          rating={el.rating}
          price={el.price}
          cartCount={el.cartCount}
          stock={el.stock}
          brand={el.brand}
          category={el.category}
          thumbnail={el.thumbnail}
          images={el.images}
          setState={setCartItemsState}
          />)}
      </div>
      </div>
      <CartSummury totalSum={totalCartData.totalSum} totalCount={totalCartData.totalCount}/>
    </main>
  );
}
