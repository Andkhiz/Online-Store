import React, { useState } from 'react';
import { IProduct } from '../../interfase';
import Cart from '../../controller/cart/cart';

function CartItem (product: IProduct): JSX.Element {
  const cart = new Cart();
  // const minusProduct = ;
  // console.log(typeof minusProduct);

  const [counter, setCounter] = useState<number>(product.cartCount);
  const [finalPrice, setFinalPrice] = useState<number>(product.price * product.cartCount);

  return (
    <div className="cart-item">
      <div className="item-id">1</div>
      <img src={product.thumbnail} alt="" />
      <div className="cart-item-description">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <div>
          <p>rating: {product.rating}</p>
          <p>discount: {product.discountPercentage}</p>
        </div>
      </div>
      <div className="purchase-data">
        <div className="stock"></div>
        <div className="counter">
          <button onClick={() => {
            cart.addProdurt(product.id, product.price, product.stock);
            // console.log(plusProduct);
            setCounter(counter + 1);
            setFinalPrice(finalPrice + product.price);
            cart.loadTotalCartData();
          }}>+</button>
          <p>{counter}</p>
          <button onClick={() => {
            if (counter <= 0) {
              cart.deleteProduct(product.id);
              setCounter(counter);
            } else {
              cart.decreaseProduct(product.id);
              setCounter(counter - 1);
              setFinalPrice(finalPrice - product.price);
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
