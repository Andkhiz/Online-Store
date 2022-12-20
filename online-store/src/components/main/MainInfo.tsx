import React from 'react';
import CardItem from './Item';
import Loader from '../../controller/loader';

function MainInfo (): JSX.Element {
  const loader = new Loader();
  const arr = loader.loadProducts();
  return (
    <section className='main-info'>
      <div className="main-info-header">
        <input type="select" />
        <input type="text" />
        <div className="view-options"></div>
      </div>
      <div className="main-info-content">
        {arr.products.map((el) => <CardItem
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
        />)}
      </div>
    </section>
  );
}
export default MainInfo;
