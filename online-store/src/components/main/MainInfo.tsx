import React from 'react';
import CardItem from './Item';
// import Loader from '../../controller/loader';
import { ILoaderClassObj } from '../../interfase';

function MainInfo (loader: ILoaderClassObj): JSX.Element {
  // const loader = new Loader();
  const arr = loader.loader.loadProducts();
  // console.log(arr.products);
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
        {...el}
        />)}
      </div>
    </section>
  );
}
export default MainInfo;
