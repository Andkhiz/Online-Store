import React, { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { IProduct, IProductsCartRender } from '../../interfase';
import Cart from '../../controller/cart/cart';
import { loadTotalCartData } from '../../controller/cart/loadTotalCartData';
import { saveLocalStorage } from '../../controller/localStogage/localStorage';

export default function ProductInfo ({ product, setTotalCartData, setCartPageData, cartPageData }: IProductsCartRender): JSX.Element {
  const cart = new Cart();
  const pageData: IProduct [] = JSON.parse(JSON.stringify(cartPageData));

  const mainImg = product.thumbnail;
  const [targetImg, setTargetImg] = useState(mainImg);

  function handleClick (event: MouseEvent<HTMLImageElement>): void {
    // targetImg = event.target;
    const target = event.target as HTMLImageElement;
    console.log(target.src);
    setTargetImg(target.src);
  }
  function addToCart (): void {
    cart.addProdurt(product.id, product.price, product.stock);
    product.onCart = true;
    product.cartCount = 1;
    pageData.push(product);
  }

  return (
    <div className="product-container">
      <div className="product-img-container">
        <div className="aside-img">
          {product.images.map((el, i) => <img src={el} key={i} onClick={handleClick}/>)}
        </div>
        <div className="main-img">
          <img src={targetImg} alt={product.title} width='200' height='200' />
        </div>
      </div>
      <div className="product-description-container">
        <h5>{product.title}</h5>
        <p className='description'>{product.description}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>discount: {product.discountPercentage}%</p>
        <b>{product.price}$</b>
      </div>
      <div className="product-purchase">
        <button className={product.onCart === true ? 'onCart' : 'notOnCart'} onClick={() => {
          if (product.onCart === true) {
            product.onCart = false;
            product.cartCount = 0;
            cart.deleteProduct(product.id);
            pageData.splice(pageData.findIndex(el => el.id === product.id), 1);
          } else {
            addToCart();
          }
          setTotalCartData(loadTotalCartData());
          setCartPageData(pageData);
        }}>{product.onCart === true ? 'Remove' : 'Add'}</button>
          <Link to='/cart'><button className='buy-now' onClick={() => {
            if (!product.onCart) {
              addToCart();
              setTotalCartData(loadTotalCartData());
              setCartPageData(pageData);
            }
            saveLocalStorage('isModalOpened', true);
          }}>buy now</button></Link>
      </div>
    </div>
  );
}
