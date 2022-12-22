import React from 'react';
import { IPromo } from '../../interfase';

export default function Promocode ({ title, discount, setPromocodeUsed }: IPromo): JSX.Element {
  return (
    <div>
      <p>{title}</p>
      <span>{discount}</span>
      <button onClick={setPromocodeUsed(discount)}>Add</button>
    </div>
  );
}
