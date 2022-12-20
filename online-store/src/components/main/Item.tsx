import React from 'react';
import { IProduct } from '../../interfase';
import { Link } from 'react-router-dom';
import Cart from '../../controller/cart/cart';

// сделала для проверки потом перенесем в интерфейсы
function Item ({ title, price, id, cartCount, stock }: IProduct): JSX.Element {
  const cart = new Cart();
  return (
    <div className="item">
    <img src="" alt="" />
      <div className="description">
        <p>{title}</p>
        <p>Price: {price}</p>
      </div>
      <div className="buttons">
          <button onClick={() => cart.addProdurt(id, cartCount, stock)}>Add</button>
          <button><Link to={`/product/${id}`}>Info</Link></button>
      </div>
    </div>
  );
}
export default Item;
