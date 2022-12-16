import React from 'react';
import CheckItem from './CheckItem';
interface StandardComponentProps {
  title?: string
}
// сделала для проверки потом перенесем в интерфейсы

function MyInputRange ({ title }: StandardComponentProps): JSX.Element {
  return (
    <div className="input-container">
      <div className="title">{title}</div>
      <CheckItem/>
      <CheckItem/>
      <CheckItem/>
    </div>
  );
}
export default MyInputRange;
