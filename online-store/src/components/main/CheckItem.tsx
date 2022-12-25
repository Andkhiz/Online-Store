import React, { useState } from 'react';
import { IElementFilterCategoryRender } from '../../interfase';
import Loader from '../../controller/loader';
import { Link } from 'react-router-dom';

function CheckItem ({ name, filterCount, count, checked, category }: IElementFilterCategoryRender): JSX.Element {
  const loader = new Loader();
  const [isChecked, setIsChecked] = useState(checked);
  console.log(isChecked);
  return (
    <Link to={loader.loadQuery('/', category, name, isChecked)}>
      <div className="check-item">
      <input type="checkbox" id={name} checked={isChecked} onClick={() => setIsChecked(true)}/>
      <label htmlFor={name}>{name}</label>
    </div>
    </Link>
  );
}
export default CheckItem;
