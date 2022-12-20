import React from 'react';
interface total {
  totalPrice: number
}

function CartSummury ({ totalPrice }: total): JSX.Element {
  return (
    <div className="summary">
      <h1>Summury</h1>
      <p>products</p>
      <p>total {totalPrice}</p>
      <input type="text" id="promoCode" />
      <label htmlFor="promoCode">Promo for test: RS, EPM</label>
      <button>buy now</button>
    </div>
  );
}
export default CartSummury;
