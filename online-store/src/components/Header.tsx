import React from 'react';

function Header (): JSX.Element {
  return (
    <header>
      <nav>
        <h1>Online Store</h1>
        <div className="cart">
          <img src="" alt="Cart" />
          <p>Total: <span>5</span></p>
        </div>
      </nav>
    </header>
  );
}
export default Header;
