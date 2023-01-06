import React from 'react';
import { IElementFilterCategoryRender } from '../../interfase';
import { useSearchParams } from 'react-router-dom';

function CheckItem ({ name, filterCount, count, checked, category, loadQuery }: IElementFilterCategoryRender): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(filterCount, count);
  return (
    <div className="check-item">
      <input type="checkbox" id={name} checked={checked} readOnly /* onChange={() => { const a = undefined; }} */ onClick={() => {
        setSearchParams(loadQuery(category, name, !checked));
      }}/>
      <label htmlFor={name}>{name}</label>
      <span>{`${filterCount}/${count}`}</span>
    </div>
  );
}
export default CheckItem;
