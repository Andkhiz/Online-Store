import React from 'react';
import CheckItem from './CheckItem';
import { IRenderProduct, ILoaderClassObj } from '../../interfase';
import Loader from '../../controller/loader';

function MyBrandsFilter ({ title }: IRenderProduct /* , loaders: ILoaderClassObj */): JSX.Element {
  const loader = new Loader();
  const arr = loader.loadProducts();
  const brands = Array.from(new Set(arr.products.map(el => el.brand)));
  return (
    <div className="filter-container">
      <h3>{title}</h3>
      <div className="filter-body">
        {brands.map(item => <CheckItem
        key={item}
        category={item}
        title={title}
      />)}
      </div>
    </div>
  );
}
export default MyBrandsFilter;
