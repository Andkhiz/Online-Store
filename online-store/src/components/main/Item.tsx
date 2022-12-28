import React from 'react';
import { IProductsCartRender } from '../../interfase';
import { Link } from 'react-router-dom';
import Cart from '../../controller/cart/cart';

function Item ({ title, price, id, cartCount, stock, thumbnail, setState }: IProductsCartRender): JSX.Element {
  const cart = new Cart();
  return (
    <div className="item">
    <img src={thumbnail} alt={title} width={150} height={150}/>
      <div className="description">
        <p>{title}</p>
        <p>Price: {price}</p>
      </div>
      <div className="buttons">
          <button onClick={() => {
            cart.addProdurt(id, price, stock);
            setState(cart.loadTotalCartData());
          }}>Add</button>
          <button><Link to={`/product/${id}`}>Info</Link></button>
      </div>
    </div>
  );
}
export default Item;
