import React from 'react';
import CheckItem from './CheckItem';
import { TFilterReturn } from '../../interfase';

function MyBrandsFilter ({ brands }: TFilterReturn): JSX.Element {
  return (
    <div className="filter-container">
      <h3>{'brands'}</h3>
      <div className="filter-body">
        {brands.map((item, id) => <CheckItem
        key={id}
        name={item.name}
        filterCount={item.filterCount}
        count={item.count}
        checked={item.checked}
        category={'brand'}
      />)}
      </div>
    </div>
  );
}
export default MyBrandsFilter;
