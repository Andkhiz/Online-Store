import React, { ChangeEvent, useState, useEffect } from 'react';
import Promocode from './Promocode';
interface total {
  totalPrice: number
}

function CartSummury ({ totalPrice }: total): JSX.Element {
  const [input, setInput] = useState('');
  const [discount, setDiscount] = useState('');
  const [promocodeUsed, setPromocodeUsed] = useState([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    useEffect(() => {
      setInput(event.target.value.toLowerCase());
    });
  };
  // useEffect(() => {
  //   if (input === 'rs' || input === 'epm') {
  //     setDiscount(input);
  //   } else {
  //     setDiscount('');
  //   }
  // }, [input]);
  // console.log(promocodeUsed);
  return (
    <div className="summary">
      <h1>Summury</h1>
      <p>products</p>
      <p>total {totalPrice}</p>
      <input type="text" id="promoCode" name='input' onChange={handleChange}/>
      <label htmlFor="promoCode">Promo for test: RS, EPM</label>
      {/* <Promocode title={'your discount'} discount={10} setPromocodeUsed={setPromocodeUsed}/>
      <Promocode title={'your discount'} discount={10} setPromocodeUsed={setPromocodeUsed}/> */}
      {/* {discount.length > 0 && promocodeUsed
        ? <Promocode title={'your discount'} discount={10} setPromocodeUsed={setPromocodeUsed}/>
        : ''
      } */}
      <button>buy now</button>
    </div>
  );
}
export default CartSummury;
