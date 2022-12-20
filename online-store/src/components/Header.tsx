import React from 'react';
import { Link } from 'react-router-dom';

function Header (): JSX.Element {
  return (
    <header>
      <nav>
        <Link to='/'><h1>Online Store</h1></Link>
        <div className="cart">
          <Link to="cart">
            <img src="" alt="Cart" />
          </Link>
          <p>Total: {1}</p>
        </div>
      </nav>
    </header>
  );
}
export default Header;
