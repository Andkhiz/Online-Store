import React, { useState } from 'react';
import { IElementFilterCategoryRender } from '../../interfase';
import Loader from '../../controller/loader';
import { useSearchParams, redirect } from 'react-router-dom';

function CheckItem ({ name, filterCount, count, checked, category }: IElementFilterCategoryRender): JSX.Element {
  // console.log('checkItem');
  // console.log(category, name, checked);
  const loader = new Loader();
  // const [isChecked, setIsChecked] = useState(checked);
  const [searchParams, setSearchParams] = useSearchParams();
  // const setSearchParams = useSearchParams()[1];
  return (
    <div className="check-item">
      <input type="checkbox" id={name} checked={checked} readOnly /* onChange={() => { const a = undefined; }} */ onClick={() => {
        // setIsChecked(!isChecked);
        setSearchParams(loader.loadQuery(category, name, !checked));
      }}/>
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
export default CheckItem;
