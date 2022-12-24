import React, { ChangeEvent } from 'react';

function Modal (): JSX.Element {
  const maxLength = (event: ChangeEvent<HTMLInputElement>): string | undefined => {
    if (event.target.value.length > 3) {
      return event.target.value.slice(0, 3);
    }
  };
  return (
    <dialog open>
      <div className="modal-content">
        <h5>Personal details</h5>
        <div className="personal-data">
          <div className="personal-data-item">
            <input type="text" id='name' placeholder='Enter name' pattern="([A-Za-z0-9А-Яа-я]{3,}( (?!$)|$)){2,}"/>
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
            <input type="tel" id='phoneNumber' placeholder='+123456789' pattern="\+\d{9,}"/>
            {/* <label htmlFor="phoneNumber">Enter name</label> */}
          </div>
          <div className="personal-data-item">
            <input type="text" id='deliveryAdress' placeholder='Enter delivery adress' pattern="\w{5,} \w{5,} \w{5,} \w{5,} \w{5,}"/>
            {/* <label htmlFor="deliveryAdress">Enter name</label> */}
          </div>
          <div className="personal-data-item">
            <input type="email" id='email' placeholder='Enter email'/>
            {/* <label htmlFor="name">Enter name</label> */}
          </div>
        </div>
        <div className="card-data">
          <h6>Credit card details</h6>
          <div className="card-data-container">
            <img src="" alt="" />
            <input type="number" min={0}/>
            <div className="card-valid">
              <label htmlFor="validDate">Expire Date: </label>
              <input type="month" name="validDate" id="validDate"/>
              <label htmlFor="cvv">CVV: </label>
              <input type="number" name="cvv" id="cvv" min={0} onChange={maxLength}/>
            </div>
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </dialog>
  );
}
export default Modal;
