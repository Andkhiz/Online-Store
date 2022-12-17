import React, { useState } from 'react';

function CartItem (): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="cart-item">
      <div className="item-id">1</div>
      <img src="" alt="" />
      <div className="cart-item-description">
        <h5>item title</h5>
        <p>item description</p>
        <div>
          <p>rating</p>
          <p>discount</p>
        </div>
      </div>
      <div className="purchase-data">
        <div className="stock"></div>
        <div className="counter">
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <p>{counter}</p>
            <button onClick={() => counter <= 0 ? setCounter(counter) : setCounter(counter - 1)}>-</button>
        </div>
        <div className="price">5 money</div>
      </div>
    </div>
  );
}
export default CartItem;
