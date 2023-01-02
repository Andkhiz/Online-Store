import React, { useState } from 'react';
import { IProductsCartRender } from '../../interfase';
import { Link } from 'react-router-dom';
import Cart from '../../controller/cart/cart';
import './buttons.scss';

function Item ({ title, price, id, cartCount, stock, thumbnail, setState, onCart }: IProductsCartRender): JSX.Element {
  const cart = new Cart();
  // console.log(onCart);
  return (
    <div className="item">
    <img src={thumbnail} alt={title} width={150} height={150}/>
      <div className="description">
        <p>{title}</p>
        <p>Price: {price}</p>
      </div>
      <div className="buttons">
          <button className={onCart ? 'onCart' : 'notOnCart'} onClick={() => {
            onCart ? cart.deleteProduct(id) : cart.addProdurt(id, price, stock);
            setState(cart.loadProductsCart().productsCart/* cart.loadTotalCartData() */);
          }}>{onCart ? 'Remove' : 'Add'}</button>
          <button><Link to={`/product/${id}`}>Info</Link></button>
      </div>
    </div>
  );
}
export default Item;
