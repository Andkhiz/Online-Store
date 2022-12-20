import React from 'react';
import CheckItem from './CheckItem';
import { IRenderProduct } from '../../interfase';
import Loader from '../../controller/loader';

function MyInputRange ({ title }: IRenderProduct): JSX.Element {
  const loader = new Loader();
  const arr = loader.loadProducts();
  const categories = Array.from(new Set(arr.products.map(el => el.category)));
  const brands = Array.from(new Set(arr.products.map(el => el.brand)));
  const filters = [categories, brands];

  return (
    <div className="input-container">
      {filters.map(el => el.map(item => <CheckItem
      key={item}
      category={item}
      title={title}
      />)
      )}
    </div>
  );
}
export default MyInputRange;
