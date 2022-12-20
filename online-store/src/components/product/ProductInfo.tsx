import React from 'react';
import { IProduct } from '../../interfase';

export default function ProductInfo ({ title, description, id, price, brand, category, discountPercentage, images, thumbnail }: IProduct): JSX.Element {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <div className="aside-img"></div>
        <div className="main-img">
          <img src={thumbnail} alt={title} width='200' height='200' />
        </div>
      </div>
      <div className="product-description-container">
        <p>{title}</p>
        <p>{description}</p>
        <p>discount: {discountPercentage}</p>
        <p>price: {price}</p>
        <p>{brand}</p>
        <p>{category}</p>
        <p></p>
      </div>
      <div className="product-purchase">
        <p></p>
        <button>add to cart</button>
        <button>buy now</button>
      </div>
    </div>
  );
}
