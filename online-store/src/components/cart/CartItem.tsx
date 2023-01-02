import React, { useState } from 'react';
import { IProductsCartRender, ICartLayout, IProduct } from '../../interfase';
import Cart from '../../controller/cart/cart';

function CartItem ({ id, title, description, rating, discountPercentage, price, cartCount, thumbnail, stock, setState, cartPageData }: IProductsCartRender): JSX.Element {
  const cart = new Cart();
  // const cartData = cart.loadProductsCart();
  const pageData: IProduct [] = JSON.parse(JSON.stringify(cartPageData));
  console.log('CartItem');
  console.log(pageData);

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
          <p>{stock} left</p>
        </div>
      </div>
      <div className="purchase-data">
        <div className="stock"></div>
        <div className="counter">
          <button onClick={() => {
            if (stock <= cartCount) {
              console.log(stock, cartCount);
              setCounter(counter);
              // setState(cart.loadProductsCart().productsCart);
            } else {
              console.log(stock, cartCount);
              setCounter(counter + 1);
              setFinalPrice(finalPrice + price);
              // cart.loadTotalCartData();
              pageData[pageData.findIndex(el => el.id === id)].cartCount += 1;
              setState(pageData/* cart.loadProductsCart().productsCart */);
              cart.addProdurt(id, price, stock);
            }
          }}>+</button>
          <p>{counter}</p>
          <button onClick={() => {
            if (counter <= 0) {
              cart.decreaseProduct(id);
              setCounter(counter);
              console.log('from cart item', cart.loadProductsCart().productsCart);
              setState(cart.loadProductsCart().productsCart);
            } else {
              cart.decreaseProduct(id);
              setCounter(counter - 1);
              setFinalPrice(finalPrice - price);
              cart.loadTotalCartData();
              console.log('from cart item', cart.loadProductsCart().productsCart);
              setState(cart.loadProductsCart().productsCart);
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
