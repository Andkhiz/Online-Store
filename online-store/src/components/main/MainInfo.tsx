import React from 'react';
import CardItem from './Item';

function MainInfo (): JSX.Element {
  const array = [1, 2, 3, 4, 5];
  return (
    <section className='main-info'>
      <div className="main-info-header">
        <input type="select" />
        <input type="text" />
        <div className="view-options"></div>
      </div>
      <div className="main-info-content">
        {array.map((el) => <CardItem num={el} key={el}/>)}
      </div>
    </section>
  );
}
export default MainInfo;
