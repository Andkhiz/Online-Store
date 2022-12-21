import React from 'react';
import CheckItem from './CheckItem';
import { IRenderProduct, ILoaderClassObj } from '../../interfase';
// import Loader from '../../controller/loader';

function MyCategoriesFilter (filter: IRenderProduct & ILoaderClassObj): JSX.Element {
  // const loader = new Loader();
  // const arr = loader.loadProducts();
  // const categories = Array.from(new Set(arr.products.map(el => el.category)));
  // const categories = loader.loadFilters().categories;

  const categories = filter.loader.loadFilters().categories;
  return (
    <div className="filter-container">
      <h3>{filter.title}</h3>
      <div className="filter-body">
        {categories.map((item, index) => <CheckItem
        key={index}
        category={item.name}
        title={filter.title}
      />)}
      </div>
    </div>
  );
}
export default MyCategoriesFilter;
