import React, { useState } from 'react';
import { IProduct } from '../../interfase';
import Cart from '../../controller/cart/cart';

function CartItem ({ title, description, rating, discountPercentage, price, cartCount }: IProduct): JSX.Element {
  const cart = new Cart();
  const cartData = cart.loadProductsCart();

  const [counter, setCounter] = useState<number>(cartCount!);
  const [finalPrice, setFinalPrice] = useState<number>(price * cartCount);

  return (
    <div className="cart-item">
      <div className="item-id">1</div>
      <img src="" alt="" />
      <div className="cart-item-description">
        <h5>{title}</h5>
        <p>{description}</p>
        <div>
          <p>rating: {rating}</p>
          <p>discount: {discountPercentage}</p>
        </div>
      </div>
      <div className="purchase-data">
        <div className="stock"></div>
        <div className="counter">
          <button onClick={() => {
            setCounter(counter + 1);
            setFinalPrice(finalPrice + 1);
          }}>+</button>
          <p>{counter}</p>
          <button onClick={() => counter <= 0 ? setCounter(counter) : setCounter(counter - 1)}>-</button>
        </div>
        <div className="price">{finalPrice}</div>
      </div>
    </div>
  );
}
export default CartItem;
