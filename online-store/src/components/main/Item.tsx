import React from 'react';
import { IRenderProduct } from '../../interfase';
import { Link } from 'react-router-dom';

// сделала для проверки потом перенесем в интерфейсы
function Item ({ title, price, id }: IRenderProduct): JSX.Element {
  return (
    <div className="item">
    <img src="" alt="" />
      <div className="description">
        <p>{title}</p>
        <p>Price: {price}</p>
      </div>
      <div className="buttons">
          <button>Add</button>
          <button><Link to={`/product/${id}`}>Info</Link></button>
      </div>
    </div>
  );
}
export default Item;
