import React from 'react';
interface StandardComponentProps {
  num: number
}
// сделала для проверки потом перенесем в интерфейсы
function Item ({ num }: StandardComponentProps): JSX.Element {
  return (
    <div className="item">
    <img src="" alt="" />
      <div className="description">
        <p>Title</p>
        <p>price{num}</p>
      </div>
      <div className="buttons">
          <button>Add</button>
          <button>Info</button>
      </div>
    </div>
  );
}
export default Item;
