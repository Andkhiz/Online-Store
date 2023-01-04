import React from 'react';
import { Link } from 'react-router-dom';
import { ICartLayout } from '../interfase';
import { loadTotalCartData } from '../controller/cart/loadTotalCartData';

function Header (): JSX.Element {
  const totalCartData = loadTotalCartData();

  return (
    <header>
      <nav>
        <Link to='/'><h1>Online Store</h1></Link>
        <div className="cart">
          <Link to="cart">
            <img src="" alt="Cart" />
          </Link>
          <p>Total: {totalCartData.totalCount}</p>
          <p>Sum: {totalCartData.totalSum}</p>
        </div>
      </nav>
    </header>
  );
}
export default Header;
