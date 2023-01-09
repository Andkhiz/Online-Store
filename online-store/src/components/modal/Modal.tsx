import React, { MouseEventHandler, useState } from 'react';
import { createValidator } from './validate';
import visa from './visa.png';
import master from './mastercard.png';
import america from './americanexpress.png';
import bankcard from './bank-card.png';
import { modalId } from '../../interfase';
import Cart from '../../controller/cart/cart';

function Modal ({ isOpened, setIsOpened, setCartPageData }: modalId): JSX.Element {
  localStorage.removeItem('isModalOpened');
  const [imgCard, setImgCard] = useState(bankcard);
  const [buyOver, setBuyOver] = useState(false);
  const [second, setSecond] = useState(5);
  let intervalId: NodeJS.Timer;
  let sMinus = 0;

  const validatorName = createValidator('name', '^([A-Za-z0-9А-Яа-я]{3,}( (?!$)|$)){2,}$', 'Error');
  const validatorPhone = createValidator('phoneNumber', '^[+][0-9]{9,}$', 'Error');
  const validatorDeliveryAdress = createValidator('deliveryAdress', '^([A-Za-z0-9А-Яа-я]{5,}( (?!$)|$)){3,}$', 'Error');
  const validatorEmail = createValidator('email', '^[A-Za-z0-9]{1,}@[A-Za-z0-9]{1,}([.][A-Za-z0-9]{2,}){1,}$', 'Error');
  const validatorCardNumber = createValidator('card-number', '[0-9]{16,16}', 'Error card number');
  const validatorExpireDate = createValidator('validDate', '^(([0](?=[1-9])|([1](?=[0-2])))[0-9]([/]))([0-9]{2})', 'Error expire date', 3);
  const validatorCVV = createValidator('cvv', '^([0-9]{3})', 'Error cvv', 4);

  function buy (): void {
    sMinus += 1;
    setSecond(second - sMinus);
    if (second - sMinus <= 0) {
      clearInterval(intervalId);
      setCartPageData([]);
      localStorage.removeItem('myDiscount');
      location.href = '/';
    }
  }

  function inputCardNumber (): void {
    const cardNumber = document.getElementById('card-number');
    if (cardNumber instanceof HTMLInputElement) {
      let text = cardNumber.value;
      text = text.split('')
        .filter(el => el === String(Number.parseInt(el)))
        .splice(0, 16)
        .join('');
      cardNumber.value = text;

      const paySystem = text.substring(0, 1);
      console.log('paySystem');
      switch (paySystem) {
        case '4':
          setImgCard(visa);
          break;
        case '5':
          setImgCard(master);
          break;
        case '3':
          setImgCard(america);
          break;
        default:
          setImgCard(bankcard);
      }
    }
  }

  function inputExpireDate (): void {
    const cardNumber = document.getElementById('validDate');
    if (cardNumber instanceof HTMLInputElement) {
      let text = cardNumber.value;
      const arr = text.split('')
        .filter(el => el === String(Number.parseInt(el)) || el === '/')
        .splice(0, 5);
      if (arr.length === 2 && arr.findIndex(el => el === '/') === -1) {
        arr.push('/');
      }
      text = arr.join('');
      cardNumber.value = text;
    }
  }

  function inputCVV (): void {
    const cardNumber = document.getElementById('cvv');
    if (cardNumber instanceof HTMLInputElement) {
      const text = cardNumber.value
        .split('')
        .filter(el => el === String(Number.parseInt(el)))
        .splice(0, 3)
        .join('');
      cardNumber.value = text;
    }
  }

  const closeModal: MouseEventHandler = event => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (target.className === 'modal-background') {
      setIsOpened(false);
    }
  };

  return (
    <div className={isOpened ? 'modal-background' : 'modal-background-hiden'} onClick={ closeModal }>
      <dialog open={ isOpened }>
      <div className={buyOver ? 'modal-content_close' : 'modal-content'}>
        <h5>Personal details</h5>
        <div className="personal-data">
          <div className="personal-data-item">
            <input type="text" id='name' placeholder='Enter name' onBlur={validatorName}/>
          </div>
          <div className="personal-data-item">
            <input type="tel" id='phoneNumber' placeholder='+123456789' onBlur={validatorPhone} />
          </div>
          <div className="personal-data-item">
            <input type="text" id='deliveryAdress' placeholder='Enter delivery adress'
              onBlur={validatorDeliveryAdress}/>
          </div>
          <div className="personal-data-item">
            <input type="text" id='email' placeholder='Enter email' onBlur={validatorEmail} />
          </div>
        </div>
        <div className="card-data">
          <h5>Credit card details</h5>
          <div className="card-error">
            <div className="card-data-container">
              <img src={imgCard} alt="Pay system" id='imgBankCard'/>
              <input type="text" id='card-number' placeholder='Card number'
                onBlur={validatorCardNumber}
                onInput={inputCardNumber}
              />
              <div className="card-valid">
                <label htmlFor="validDate">Expire Date: </label>
                <input type="text" placeholder='mm/yy' id="validDate"
                  onBlur={validatorExpireDate}
                  onInput={inputExpireDate}
                />

                <label htmlFor="cvv">CVV: </label>
                <input type="text" name="cvv" id="cvv"
                  onBlur={validatorCVV}
                  onInput={inputCVV}
                />
              </div>
            </div>
          </div>
        </div>
        <button className='buyProduct' onClick={(): void => {
          const modul = document.getElementsByClassName('modal-content')[0];
          console.log('fff');
          validatorName();
          validatorPhone();
          validatorDeliveryAdress();
          validatorEmail();
          validatorCardNumber();
          validatorExpireDate();
          validatorCVV();

          let mayBuy = true;
          const inputs = modul.getElementsByTagName('input');
          for (let i = 0; i < inputs.length; i += 1) {
            if (!inputs[i].validity.valid) {
              mayBuy = false;
              break;
            }
          }
          if (mayBuy) {
            intervalId = setInterval(buy, 1000);
            const cart = new Cart();
            cart.deleteAllProdurt();
            setBuyOver(true);
          }
        }}>Confirm</button>
      </div>
      <div className={!buyOver ? 'modal-buy-over_close' : 'modal-buy-over'}>
         <h5>Your order has been placed! Thank you for your purchase!</h5>
         <p>00:00:0{second}</p>
      </div>
    </dialog>
    </div>

  );
}
export default Modal;
