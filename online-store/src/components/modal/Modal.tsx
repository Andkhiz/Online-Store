import React /*, { ChangeEvent } */ from 'react';
import { createValidator } from './validate';

function Modal (): JSX.Element {
  /* const maxLength = (event: ChangeEvent<HTMLInputElement>): string | undefined => {
    if (event.target.value.length > 3) {
      return event.target.value.slice(0, 3);
    }
  }; */
  const validatorName = createValidator('name', '^([A-Za-z0-9А-Яа-я]{3,}( (?!$)|$)){2,}$', 'Error');
  const validatorPhone = createValidator('phoneNumber', '^[+][0-9]{9,}$', 'Error');
  const validatorDeliveryAdress = createValidator('deliveryAdress', '^([A-Za-z0-9А-Яа-я]{5,}( (?!$)|$)){3,}$', 'Error');
  const validatorEmail = createValidator('email', '^[A-Za-z0-9]{1,}@[A-Za-z0-9]{1,}([.][A-Za-z0-9]{2,}){1,}$', 'Error');
  const validatorCardNumber = createValidator('card-number', '[0-9]{16,16}' /* '([0-9]{4,4}( (?!$)|$)){4,4}' */, 'Error card number');
  const validatorExpireDate = createValidator('validDate', '^(([0](?=[1-9])|([1](?=[0-2])))[0-9]([/]))([0-9]{2})', 'Error expire date', 3);
  const validatorCVV = createValidator('cvv', '^([0-9]{3})', 'Error cvv', 4);

  function inputCardNumber (): void {
    const cardNumber = document.getElementById('card-number');
    if (cardNumber instanceof HTMLInputElement) {
      let text = cardNumber.value;
      // text = text.replaceAll(' ', '');
      text = text.split('')
        .filter(el => el === String(Number.parseInt(el)))
        .splice(0, 16)
        .join('');
      /* .reduce((str, el) => {
          console.log(str.length);
          str = str + (((str.length - Math.floor(str.length / 5) + 1) % 4 === 0 && str.length !== 0 && str.length < 17) ? String(el) + ' ' : String(el));
          return str;
        }, ''); */
      cardNumber.value = text;
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

  return (
    <dialog open>
      <div className="modal-content">
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
          <h6>Credit card details</h6>
          <div className="card-error">
            <div className="card-data-container">
              <img src="" alt="" />
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
          for (let i = 0; i < modul.getElementsByTagName('input').length; i += 1) {
            if (!modul.getElementsByTagName('input')[i].validity.valid) {
              mayBuy = false;
              break;
            }
          }
          if (mayBuy) { alert('Вы удачно совершили покупку'); }
        }}>Confirm</button>
      </div>
    </dialog>
  );
}
export default Modal;
