import React, { useState } from 'react';
import { IElementFilterCategoryRender } from '../../interfase';
import Loader from '../../controller/loader';
import { Link } from 'react-router-dom';

function CheckItem ({ name, filterCount, count, checked, category, searchParams, setSearchParams }: IElementFilterCategoryRender): JSX.Element {
  const loader = new Loader();
  const [isChecked, setIsChecked] = useState(checked);
  const filterQuery = searchParams.get(category) || '';
  // console.log(isChecked);
  return (
    <div className="check-item">
      <input type="checkbox" id={name} defaultChecked={isChecked} onClick={() => {
        setIsChecked(true);
        setSearchParams({ category: name });
        // searchParams.append(category, name);
        // setSearchParams(searchParams);
        // console.log(searchParams);
      }}/>
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
export default CheckItem;
