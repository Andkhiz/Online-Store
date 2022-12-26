import React, { ChangeEvent, useState } from 'react';
import Item from './Item';
import Loader from '../../controller/loader';
import { ICartLayout } from '../../interfase';
import EmptyMain from './EmptyMain';
import { useSearchParams } from 'react-router-dom';

function MainInfo ({ setCartPageData, cartPageData }: ICartLayout): JSX.Element {
  const loader = new Loader();
  const arr = loader.loadProducts();
  // console.log(arr.products[0].title.toLowerCase());
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const titleQuery = searchParams.get('filter') ?? '';
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
    setInput(titleQuery.toLowerCase());
    const query = event.target.value.toLowerCase();
    setSearchParams({ filter: query });
    // setSearchParams(loader.loadQuery('filter', query, true));
    // заменяет строку поиска полностью надо пофиксить
  };
  return (
    <section className='main-info'>
      <div className="main-info-header">
        <select>
          <option disabled defaultValue="Select options">Select options</option>
        </select>
        <input type="search" placeholder='Search...' onChange={handleChange} value={input}/>
        <div className="view-options"></div>
      </div>
      <div className="main-info-content">
        {arr.products.length === 0
          ? <EmptyMain/>
          : arr.products.filter(el => el.title.toLowerCase().includes(titleQuery)).map((el) => <Item
          key={el.id}
          id={el.id}
          title={el.title}
          description={el.description}
          discountPercentage={el.discountPercentage}
          rating={el.rating}
          price={el.price}
          cartCount={el.cartCount}
          stock={el.stock}
          brand={el.brand}
          category={el.category}
          thumbnail={el.thumbnail}
          images={el.images}
          setState={setCartPageData}
        />)}
      </div>
    </section>
  );
}
export default MainInfo;
