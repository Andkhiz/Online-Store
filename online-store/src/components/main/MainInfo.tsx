import React, { ChangeEvent } from 'react';
import Item from './Item';
import Loader from '../../controller/loader';
import { ICartLayout } from '../../interfase';
import EmptyMain from './EmptyMain';
import { useSearchParams } from 'react-router-dom';

function MainInfo ({ setCartPageData, cartPageData, totalCartData, setTotalCartData, getQueryParams }: ICartLayout): JSX.Element {
  const loader = new Loader();
  const arr = loader.loadProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const query = event.target.value.toLowerCase();
    setSearchParams(getQueryParams('filter', query, !(query === '')));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSearchParams(getQueryParams('sort', event.target.value, true));
  };
  // console.log(arr.products);
  return (
    <section className='main-info'>
      <div className="main-info-header">
        <form>
          <select value={loader.loadFilters().sort} onChange={handleSelectChange}>
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
        <input type="search" placeholder='Search...' onChange={handleChange} value={loader.loadFilters().filter}/>
        <div className="view-options"></div>
      </div>
      <div className="main-info-content">
        {arr.products.length === 0
          ? <EmptyMain/>
          : arr.products.map((el) => <Item
          key={el.id}
          product={el}
          setCartPageData={setCartPageData}
          cartPageData={cartPageData}
          totalCartData={totalCartData}
          setTotalCartData={setTotalCartData}
        />)}
      </div>
    </section>
  );
}
export default MainInfo;
