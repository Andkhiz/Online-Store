import React, { ChangeEvent, useState /*, useEffect */ } from 'react';
import Modal from '../modal/Modal';
import Promocode from './Promocode';
import Discount from '../../controller/discount/discount';
import { ICartTotal } from '../../interfase';

function CartSummury ({ totalSum, totalCount }: ICartTotal): JSX.Element {
  // console.log('CartSummary');
  // console.log(totalSum);
  // console.log(totalCount);
  // const [finalCount, setTotalSumCart] = useState(totalCount);
  // const [finalPrice, setFinalPrice] = useState(totalSum);

  const discount = new Discount();
  const discounts = discount.loadDiscounts().map(el => el.id);
  const [input, setInput] = useState('');
  const a = localStorage.getItem('isModalOpened');
  let modalIsOpen = false;
  if (a !== null && a === 'true') {
    modalIsOpen = true;
  }
  // document.body.onclick(() => console.log('body click'));
  const [isOpened, setIsOpened] = useState(modalIsOpen);
  // const [discount, setDiscount] = useState('');
  const [promocodeUsed, setPromocodeUsed] = useState(discounts);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value.toLowerCase());
  };
  return (
    <div className="summary">
      <h1>Summury</h1>
      <p>products: {totalCount}</p>
      <p>Total: {totalSum}</p>
      {promocodeUsed.length > 0 &&
        <p>Total: {Math.round(totalSum * (1 - discount.loadTotalDiscount() / 100))}</p>
      }
      <input type="text" id="promoCode" name='input' onChange={handleChange}/>
      <label htmlFor="promoCode">Promo for test: RS, EPM</label>
      <Modal isOpened={isOpened} setIsOpened={setIsOpened}/>
      {(input === 'rs' || promocodeUsed.includes('1')) &&
        <Promocode id='1' name='rs-discount' discountPercentage={10} promocodeUsed={promocodeUsed} setPromocodeUsed={setPromocodeUsed}/>
      }
      {(input === 'epm' || promocodeUsed.includes('2')) &&
        <Promocode id='2' name='epam-discount' discountPercentage={10} promocodeUsed={promocodeUsed} setPromocodeUsed={setPromocodeUsed}/>
      }
      <button onClick={() => setIsOpened(true)}>buy now</button>
    </div>
  );
}
export default CartSummury;
