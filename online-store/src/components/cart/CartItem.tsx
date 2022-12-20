import React, { useState } from 'react';
import { IProduct } from '../../interfase';
import Cart from '../../controller/cart/cart';

function CartItem ({ id, title, description, rating, discountPercentage, price, cartCount, thumbnail, stock }: IProduct): JSX.Element {
  const cart = new Cart();
  // const minusProduct = ;
  // console.log(typeof minusProduct);

  const [counter, setCounter] = useState<number>(cartCount);
  const [finalPrice, setFinalPrice] = useState<number>(price * cartCount);

  return (
    <div className="cart-item">
      <div className="item-id">1</div>
      <img src={thumbnail} alt="" />
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
            cart.addProdurt(id, price, stock);
            // console.log(plusProduct);
            setCounter(counter + 1);
            setFinalPrice(finalPrice + price);
            cart.loadTotalCartData();
          }}>+</button>
          <p>{counter}</p>
          <button onClick={() => {
            if (counter <= 0) {
              cart.deleteProduct(id);
              setCounter(counter);
            } else {
              cart.decreaseProduct(id);
              setCounter(counter - 1);
              setFinalPrice(finalPrice - price);
              cart.loadTotalCartData();
            }
          }}
          >-</button>
        </div>
        <div className="price">{finalPrice}</div>
      </div>
    </div>
  );
}
export default CartItem;
