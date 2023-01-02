import React, { useState } from 'react';
import { IProductsCartRender, IProduct } from '../../interfase';
import { Link } from 'react-router-dom';
import Cart from '../../controller/cart/cart';
import './buttons.scss';
import { loadTotalCartData } from '../../controller/cart/loadTotalCartData';

function Item ({ product, setTotalCartData, setCartPageData, cartPageData }: IProductsCartRender): JSX.Element {
  const cart = new Cart();
  const pageData: IProduct [] = JSON.parse(JSON.stringify(cartPageData));

  return (
    <div className="item">
    <img src={product.thumbnail} alt={product.title} width={150} height={150}/>
      <div className="description">
        <p>{product.title}</p>
        <p>Price: {product.price}</p>
      </div>
      <div className="buttons">
          <button className={product.onCart ? 'onCart' : 'notOnCart'} onClick={() => {
            if (product.onCart === true) {
              cart.deleteProduct(product.id);
              pageData.splice(pageData.findIndex(el => el.id === product.id), 1);
            } else {
              cart.addProdurt(product.id, product.price, product.stock);
              product.onCart = true;
              product.cartCount = 1;
              pageData.push(product);
            }
            setTotalCartData(loadTotalCartData());
            setCartPageData(pageData);
          }}>{product.onCart ? 'Remove' : 'Add'}</button>
          <button><Link to={`/product/${String(product.id)}`}>Info</Link></button>
      </div>
    </div>
  );
}
export default Item;
