import React from 'react';
import CheckItem from './CheckItem';
import { TFilterReturn, IFilterData } from '../../interfase';

function MyBrandsFilter ({ filterElements, loadQuery }: IFilterData): JSX.Element {
  return (
    <div className="filter-container">
      <h3>{'brands'}</h3>
      <div className="filter-body">
        {filterElements.length <= 0
          ? filterElements.length
          : filterElements.map((item, id) => <CheckItem
          key={id}
          name={item.name}
          filterCount={item.filterCount}
          count={item.count}
          checked={item.checked}
          category={'brand'}
          loadQuery={loadQuery}
      />)}
      </div>
    </div>
  );
}
export default MyBrandsFilter;
