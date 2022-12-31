import React, { ChangeEvent, useState } from 'react';
import Item from './Item';
import Loader from '../../controller/loader';
import { ICartLayout } from '../../interfase';
import EmptyMain from './EmptyMain';
import { useSearchParams } from 'react-router-dom';

function MainInfo ({ setCartPageData, cartPageData }: ICartLayout): JSX.Element {
  const loader = new Loader();
  const arr = loader.loadProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(loader.loadFilters().filter);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value.toLowerCase());
    const query = event.target.value.toLowerCase();
    setSearchParams(loader.loadQuery('filter', query, true));
  };
  const [select, setSelect] = useState(searchParams.get('sort') ?? 'Select options');
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSearchParams(loader.loadQuery('sort', event.target.value, true));
    setSelect(event.target.value);
    console.log(event.target.value);
  };
  console.log(arr.products);
  return (
    <section className='main-info'>
      <div className="main-info-header">
        <form>
          <select value={select} onChange={handleSelectChange}>
            <option disabled value="Select options">Select options</option>
            <option value="price-ASC">Price ASC</option>
            <option value="price-DESC">Price DESC</option>
            <option value="rating-ASC">Rating ASC</option>
            <option value="rating-DESC">Rating DESC</option>
            <option value="discount-ASC">Discount ASC</option>
            <option value="discount-DESC">Discount DESC</option>
          </select>
        </form>
        <span>{arr.products.length} goods was found!</span>
        <input type="search" placeholder='Search...' onChange={handleChange} value={input}/>
        <div className="view-options"></div>
      </div>
      <div className="main-info-content">
        {arr.products.length === 0
          ? <EmptyMain/>
          : arr.products.map((el) => <Item
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
          onCart={el.onCart}
        />)}
      </div>
    </section>
  );
}
export default MainInfo;
