import React from 'react';
import CardItem from './Item';
import Loader from '../../controller/loader';

function MainInfo (): JSX.Element {
  const loader = new Loader();
  const arr = loader.loadProducts();
  console.log(arr);
  return (
    <section className='main-info'>
      <div className="main-info-header">
        <input type="select" />
        <input type="text" />
        <div className="view-options"></div>
      </div>
      <div className="main-info-content">
        {arr.products.map((el, i) => <CardItem
        key={i}
        id={i}
        title={el.title}
        price={el.price}

        />)}
      </div>
    </section>
  );
}
export default MainInfo;
