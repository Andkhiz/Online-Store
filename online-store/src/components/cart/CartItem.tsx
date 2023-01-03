import React /*, { useState } */ from 'react';
import { IProductsCartRender, /* ICartLayout, */ IProduct } from '../../interfase';
import Cart from '../../controller/cart/cart';
import { loadTotalCartData } from '../../controller/cart/loadTotalCartData';

function CartItem ({ product, setTotalCartData, setCartPageData, cartPageData }: IProductsCartRender): JSX.Element {
  const cart = new Cart();
  const pageData: IProduct [] = JSON.parse(JSON.stringify(cartPageData));
  // console.log('CartItem');
  // console.log(product.cartCount);

  // const [counter, setCounter] = useState<number>(product.cartCount);
  // const [finalPrice, setFinalPrice] = useState<number>(product.price * product.cartCount);

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
          <p>{product.stock} left</p>
        </div>
      </div>
      <div className="purchase-data">
        <div className="stock"></div>
        <div className="counter">
        <button onClick={() => {
          cart.decreaseProduct(product.id);
          setTotalCartData(loadTotalCartData());
          if (product.cartCount <= 1) {
            pageData.splice(pageData.findIndex(el => el.id === product.id), 1);
          } else {
            pageData[pageData.findIndex(el => el.id === product.id)].cartCount -= 1;
          }
          setCartPageData(pageData);
        }}
          >-</button>
          <p>{product.cartCount}</p>
          <button onClick={() => {
            if (product.stock > product.cartCount) {
              cart.addProdurt(product.id, product.price, product.stock);
              setTotalCartData(loadTotalCartData());
              pageData[pageData.findIndex(el => el.id === product.id)].cartCount += 1;
              setCartPageData(pageData);
            }
          }}>+</button>
        </div>
        <div className="price">{product.price * product.cartCount}</div>
      </div>
    </div>
  );
}
export default CartItem;
