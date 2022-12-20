import React from 'react';
import { IProduct } from '../../interfase';
import { Link } from 'react-router-dom';
import Cart from '../../controller/cart/cart';

function Item (product: IProduct): JSX.Element {
  const cart = new Cart();
  return (
    <div className="item">
    <img src={product.thumbnail} alt={product.title} width={150} height={150}/>
      <div className="description">
        <p>{product.title}</p>
        <p>Price: {product.price}</p>
      </div>
      <div className="buttons">
          <button onClick={() => cart.addProdurt(product.id, product.price, product.stock)}>Add</button>
          <button><Link to={`/product/${product.id}`}>Info</Link></button>
      </div>
    </div>
  );
}
export default Item;
