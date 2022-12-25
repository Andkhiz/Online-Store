import React /*, { ChangeEvent } */ from 'react';
import { createValidator } from './validate';

function Modal (): JSX.Element {
  /* const maxLength = (event: ChangeEvent<HTMLInputElement>): string | undefined => {
    if (event.target.value.length > 3) {
      return event.target.value.slice(0, 3);
    }
  }; */
  return (
    <dialog open>
      <div className="modal-content">
        <h5>Personal details</h5>
        <div className="personal-data">
          <div className="personal-data-item">
            <input type="text" id='name' placeholder='Enter name'
              onBlur={createValidator('name', '^([A-Za-z0-9А-Яа-я]{3,}( (?!$)|$)){2,}$', 'Error')}
              // pattern="([A-Za-z0-9А-Яа-я]{3,}( (?!$)|$)){2,}"
            />
            {/* <label htmlFor="name">Enter name</label> */}
          </div>
          <div className="personal-data-item">
            {/* <label>
                +<input
                name="tel1"
                type="tel"
                pattern="[1-9]{3}"
                placeholder="###"
                aria-label="3-digit area code"
                size={2} /> -
                (<input
                name="tel2"
                type="tel"
                pattern="[1-9]{2,2}"
                placeholder="###"
                aria-label="3-digit prefix"
                size={2} />)
                -
                <input
                name="tel3"
                type="tel"
                pattern="[0-9]{7,7}"
                placeholder="####"
                aria-label="4-digit number"
                size={6} />
            </label> */}
            <input type="tel" id='phoneNumber' placeholder='+123456789'
              onBlur={createValidator('phoneNumber', '^[+][0-9]{9,}$', 'Error')}/>
          </div>
          <div className="personal-data-item">
            <input type="text" id='deliveryAdress' placeholder='Enter delivery adress'
              onBlur={createValidator('deliveryAdress', '^([A-Za-z0-9А-Яа-я]{5,}( (?!$)|$)){3,}$', 'Error')}
            // pattern="([A-Za-z0-9А-Яа-я]{5,}( (?!$)|$)){3,}"
            />
            {/* <label htmlFor="deliveryAdress">Enter name</label> */}
          </div>
          <div className="personal-data-item">
            <input type="text" id='email' placeholder='Enter email'
            onBlur={createValidator('email', '^[A-Za-z0-9]{1,}@[A-Za-z0-9]{1,}([.][A-Za-z0-9]{2,}){1,}$', 'Error')}
            // pattern="\w{1,}@\w{1,}\.\w{2,}"
            />
            {/* <label htmlFor="name">Enter name</label> */}
          </div>
        </div>
        <div className="card-data">
          <h6>Credit card details</h6>
          <div className="card-data-container">
            <img src="" alt="" />
            <input type="text" id='card-number' placeholder='Card number'
              onBlur={createValidator('card-number', '[0-9]{16,16}' /* '([0-9]{4,4}( (?!$)|$)){4,4}' */, 'Error card number')}
              onInput={(): void => {
                const cardNumber = document.getElementById('card-number');
                if (cardNumber instanceof HTMLInputElement) {
                  let text = cardNumber.value;
                  text = text.replaceAll(' ', '');
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
              }}
              // pattern="[0-9]{16,16}"
            />
            <div className="card-valid">
              <label htmlFor="validDate">Expire Date: </label>
              <input type="text" placeholder='mm/yy' id="validDate"
                onBlur={createValidator('validDate', '^(([0](?=[1-9])|([1](?=[0-2])))[0-9]([/]))([0-9]{2})', 'Error expire date', 3)}
                // pattern ="^(([0](?=[1-9])|([1](?=[0-2])))[0-9]([/]))([0-9]{2})"
                onInput={(): void => {
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
                }}
              />
              <label htmlFor="cvv">CVV: </label>
              <input type="text" name="cvv" id="cvv"
                onBlur={createValidator('cvv', '^([0-9]{3})', 'Error cvv', 4)}
                onInput={(): void => {
                  const cardNumber = document.getElementById('cvv');
                  if (cardNumber instanceof HTMLInputElement) {
                    const text = cardNumber.value
                      .split('')
                      .filter(el => el === String(Number.parseInt(el)))
                      .splice(0, 3)
                      .join('');
                    cardNumber.value = text;
                  }
                }}
              />
            </div>
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </dialog>
  );
}
export default Modal;
