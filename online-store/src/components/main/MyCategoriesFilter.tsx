import React from 'react';
import CheckItem from './CheckItem';
import { TFilterReturn } from '../../interfase';

function MyCategoriesFilter ({ categories }: TFilterReturn): JSX.Element {
  return (
    <div className="filter-container">
      <h3>{'categories'}</h3>
      <div className="filter-body">
        {categories.map((item, id) => <CheckItem
        key={id}
        name={item.name}
        filterCount={item.filterCount}
        count={item.count}
        checked={item.checked}
        category={'category'}
      />)}
      </div>
    </div>
  );
}
export default MyCategoriesFilter;
