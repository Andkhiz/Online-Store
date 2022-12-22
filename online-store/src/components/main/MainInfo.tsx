import React from 'react';
import Item from './Item';
import Loader from '../../controller/loader';
import { ICartLayout } from '../../interfase';

function MainInfo ({ setCartPageData, cartPageData }: ICartLayout): JSX.Element {
  const loader = new Loader();
  const arr = loader.loadProducts();
  // console.log(arr.products);
  return (
    <section className='main-info'>
      <div className="main-info-header">
        <input type="select" />
        <input type="text" />
        <div className="view-options"></div>
      </div>
      <div className="main-info-content">
        {arr.products.map((el) => <Item
        key={el.id}
        id={el.id}
        title={el.title}
        description={el.description}
        discountPercentage={el.discountPercentage}
        rating={el.rating}
        price={el.price}
        cartCount={el.cartCount}
        stock={el.stock}
        brand={el.brand}
        category={el.category}
        thumbnail={el.thumbnail}
        images={el.images}
        setState={setCartPageData}
        />)}
      </div>
    </section>
  );
}
export default MainInfo;
