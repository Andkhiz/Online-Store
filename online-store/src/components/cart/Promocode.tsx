import React from 'react';
import { IPromo } from '../../interfase';
import Discount from '../../controller/discount/discount';

export default function Promocode ({ id, name, discountPercentage, promocodeUsed, setPromocodeUsed }: IPromo): JSX.Element {
  const discount = new Discount();
  return (
    <div>
      <p>your discount is {discountPercentage}%!</p>
      <button onClick={() => {
        if (promocodeUsed.includes(id)) {
          discount.deleteDiscount(id);
          const discounts = discount.loadDiscounts().map(el => el.id);
          setPromocodeUsed(discounts);
        } else {
          discount.addDiscount(id, name, discountPercentage);
          const discounts = discount.loadDiscounts().map(el => el.id);
          setPromocodeUsed(discounts);
        }
      }}>{promocodeUsed.includes(id) ? 'delete' : 'add'}</button>
    </div>
  );
}
