import React from 'react';

function CheckItem (): JSX.Element {
  return (
    <div className="check-item">
      <input type="checkbox" id="1"/>
      <label htmlFor="1">value1</label>
    </div>
  );
}
export default CheckItem;
