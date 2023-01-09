import React from 'react';
import CheckItem from './CheckItem';
import { TFilterReturn, IFilterData } from '../../interfase';
// import { useSearchParams } from 'react-router-dom';

function MyCategoriesFilter ({ filterElements, loadQuery }: IFilterData): JSX.Element {
  // console.log(loadQuery);
  return (
    <form className="filter-container">
      <h3>{'Categories'}</h3>
      <div className="filter-body">
        {filterElements.length <= 0
          ? filterElements.length
          : filterElements.map((item, id) => <CheckItem
          key={id}
          name={item.name}
          filterCount={item.filterCount}
          count={item.count}
          checked={item.checked}
          category={'category'}
          loadQuery={loadQuery}
      />)}
      </div>
    </form>
  );
}
export default MyCategoriesFilter;
