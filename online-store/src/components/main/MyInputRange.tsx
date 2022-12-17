import React from 'react';
interface StandardComponentProps {
  title: string
}
// сделала для проверки потом перенесем в интерфейсы

function MyInputRange ({ title }: StandardComponentProps): JSX.Element {
  return (
    <div className="input-container">
      <div className="title">{title}</div>
      <div className="amount">6</div>
      <input type="range" min={0}/>
    </div>
  );
}
export default MyInputRange;
