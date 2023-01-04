import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CartSummury from './CartSummury';
// import Cart from '../../controller/cart/cart';
import { ICartLayout, IGeneralCartData } from '../../interfase';
import { useSearchParams } from 'react-router-dom';
import { getCartQueryParams } from '../../controller/queryParams/queryCartParams';
import { parceCartParams } from '../../controller/cart/parceCartParams';

export default function CartItemsContainer ({ cartPageData, setCartPageData, totalCartData, setTotalCartData }: ICartLayout): JSX.Element {
  const [generalCartData, setGeneralCartData] = useState<IGeneralCartData>({ page: 1, limit: 3 });
  const [searchParams, setSearchParams] = useSearchParams();
  const pageMinus = function (): void {
    console.log('page-minus');
    if (generalCartData.page >= 2) {
      setSearchParams(getCartQueryParams('page', String(generalCartData.page - 1), cartPageData.length));
    }
  };
  const pagePlus = function (): void {
    console.log('page-minus');
    if (generalCartData.page < cartPageData.length / generalCartData.limit) {
      setSearchParams(getCartQueryParams('page', String(generalCartData.page + 1), cartPageData.length));
    }
  };
  // const cart = new Cart();
  // const cartData = cart.loadProductsCart();
  // const totalCartData = cart.loadTotalCartData();
  // const cartItems = cartPageData/* cartData.productsCart */;
  // const [cartItemsState, setCartItemsState] = useState([/* cartPageData */cartData.productsCart]);
  /* useEffect(() => {
    setCartPageData(cartItemsState);
  }, [cartItemsState]); */
  console.log('CartItemsContainer');
  console.log(totalCartData);
  console.log('generalCartData');
  console.log(generalCartData);
  useEffect(() => { setGeneralCartData(parceCartParams(searchParams)); }, [searchParams]);

  return (
    <main className='cart'>
      <div className="cart-items-conrainer">
      <div className="cart-items-header">
        <h2>products in cart</h2>
        <div className="cart-state">
          <p>Limit
            <input className='cart-state__limit' type={'number'} min={1} max={cartPageData.length} value={generalCartData.limit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value;
              console.log('limit change');
              console.log(newValue);
              console.log(getCartQueryParams('limit', String(newValue), cartPageData.length));
              setSearchParams(getCartQueryParams('limit', String(newValue), cartPageData.length));
            }}
            />
          </p>
          <p>
          page:
            <button className='cart-state__Button-page' onClick={ pageMinus }> {'<'}</button>
            {generalCartData.page}</p>
            <button className='cart-state__Button-page' onClick={ pagePlus }> {'>'}</button>
        </div>
      </div>
      <div className="cart-items-body">
        {cartPageData.filter((item, index) => {
          return index >= ((generalCartData.page - 1) * generalCartData.limit) &&
            index <= ((generalCartData.page * generalCartData.limit - 1));
        }).map((el) => <CartItem
          key={el.id}
          product={el}
          setTotalCartData={setTotalCartData}
          cartPageData={cartPageData}
          totalCartData={totalCartData}
          setCartPageData={setCartPageData}
          />)}
      </div>
      </div>
      <CartSummury {...totalCartData}/>
    </main>
  );
}
