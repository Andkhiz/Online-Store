import React from 'react';
import { IRenderProduct } from '../../interfase';

function CheckItem ({ category }: IRenderProduct): JSX.Element {
  return (
    <div className="check-item">
      <input type="checkbox" id="1"/>
      <label htmlFor="1">{category}</label>
    </div>
  );
}
export default CheckItem;
