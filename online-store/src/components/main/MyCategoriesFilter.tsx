import React from 'react';
import CheckItem from './CheckItem';
import { IRenderProduct } from '../../interfase';
import Loader from '../../controller/loader';

function MyCategoriesFilter ({ title }: IRenderProduct): JSX.Element {
  const loader = new Loader();
  const arr = loader.loadProducts();
  const categories = Array.from(new Set(arr.products.map(el => el.category)));

  return (
    <div className="filter-container">
      <h3>{title}</h3>
      <div className="filter-body">
        {categories.map(item => <CheckItem
        key={item}
        category={item}
        title={title}
      />)}
      </div>
    </div>
  );
}
export default MyCategoriesFilter;
