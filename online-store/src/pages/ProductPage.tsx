import React from 'react';

function ProductPage (): JSX.Element {
  return (
    <main className='product'>
      <div className="product-path">
        store---smartphones---apple
      </div>
      <div className="product-container">
        <div className="product-img-container">
          <div className="aside-img"></div>
          <div className="main-img"></div>
        </div>
        <div className="product-description-container">
          <p>title</p>
          <p>descr</p>
          <p>discount</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="product-purchase">
          <p></p>
          <button>add to cart</button>
          <button>buy now</button>
        </div>
      </div>
    </main>
  );
}
export default ProductPage;
