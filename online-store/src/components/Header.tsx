import React from 'react';
import { Link } from 'react-router-dom';
import { ICartLayout } from '../interfase';
import { loadTotalCartData } from '../controller/cart/loadTotalCartData';
import cartLogo from '../assets/cart-logo.png';

function Header (): JSX.Element {
  const totalCartData = loadTotalCartData();

  return (
    <header>
      <nav>
        <Link to='/'><h1>Online Store</h1></Link>
        <div className="cart">
          <Link to="cart">
            <div className='cart-count'>{totalCartData.totalCount}</div>
            <img src={cartLogo} alt="Cart" />
          </Link>
          <p>{totalCartData.totalSum}$</p>
        </div>
      </nav>
    </header>
  );
}
export default Header;
