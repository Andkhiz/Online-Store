import React from 'react';
import { IRenderProduct } from '../../interfase';

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
          <button>Info</button>
      </div>
    </div>
  );
}
export default Item;
