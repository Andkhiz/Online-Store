import React, { useState } from 'react';
import MainInfo from '../components/main/MainInfo';
import MyCategoriesFilter from '../components/main/MyCategoriesFilter';
import MyBrandsFilter from '../components/main/MyBrandsFilter';
import MyInputRange from '../components/main/MyInputRange';
import { ICartLayout } from '../interfase';
// import StartLoader from '../controller/startLoader';
import Loader from '../controller/loader';
import { useSearchParams } from 'react-router-dom';

function MainPage ({ setCartPageData, cartPageData, totalCartData, setTotalCartData }: ICartLayout): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const loader = new Loader();
  // Why it is need?
  const filters = loader.loadFilters();
  // const loadQuery = loader.loadQuery;
  /* const brands = loader.loadFilters().brands;
  const categories = loader.loadFilters().categories;
  const prices = loader.loadFilters().prices;
  const stocks = loader.loadFilters().stocks;
  const sort = loader.loadFilters().sort;
  const filter = loader.loadFilters().filter; */
  return (
    <main>
      <aside className='side-bar'>
        <div className="side-buttons">
          <button onClick={() => {
            setSearchParams('');
          }}>Reset filter</button>
          <button>Copy link</button>
        </div>
        <MyCategoriesFilter filterElements={filters.categories} loadQuery={loader.loadQuery}/* brands={brands} categories={categories} prices={prices} stocks={stocks} sort={sort} filter={filter} *//>
        <MyBrandsFilter filterElements={filters.brands} loadQuery={loader.loadQuery} /* brands={brands} categories={categories} prices={prices} stocks={stocks} sort={sort} filter={filter} *//>
        <MyInputRange title='price' rangeData={filters.prices} loadQuery={loader.loadQuery}/>
        <MyInputRange title='stock' rangeData={filters.stocks} loadQuery={loader.loadQuery}/>
      </aside>
      <MainInfo cartPageData={cartPageData} setCartPageData={setCartPageData} totalCartData={totalCartData}
              setTotalCartData={setTotalCartData}/>
    </main>
  );
}
export default MainPage;
