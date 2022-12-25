import React from 'react';
import CheckItem from './CheckItem';
import { TFilterReturn } from '../../interfase';
import { useSearchParams } from 'react-router-dom';

function MyCategoriesFilter ({ categories }: TFilterReturn): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <form className="filter-container">
      <h3>{'categories'}</h3>
      <div className="filter-body">
        {categories.map((item, id) => <CheckItem
        key={id}
        name={item.name}
        filterCount={item.filterCount}
        count={item.count}
        checked={item.checked}
        category={'category'}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />)}
      </div>
    </form>
  );
}
export default MyCategoriesFilter;
