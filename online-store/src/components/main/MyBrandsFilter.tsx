import React from 'react';
import CheckItem from './CheckItem';
import { IRenderProduct, ILoaderClassObj } from '../../interfase';
// import Loader from '../../controller/loader';

function MyBrandsFilter (loader: IRenderProduct & ILoaderClassObj): JSX.Element {
  // const loader = new Loader();
  // const arr = loader.loadProducts();
  // const brands = Array.from(new Set(arr.products.map(el => el.brand)));
  const brands = loader.loader.filter.brands;
  return (
    <div className="filter-container">
      <h3>{loader.title}</h3>
      <div className="filter-body">
        {brands.map((item, index) => <CheckItem
        key={index}
        category={item.name}
        title={loader.title}
      />)}
      </div>
    </div>
  );
}
export default MyBrandsFilter;
