import React from 'react';

function CartItem (): JSX.Element {
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
            <button>+</button>
            <p></p>
            <button>-</button>
        </div>
        <div className="price">5 money</div>
      </div>
    </div>
  );
}
export default CartItem;
