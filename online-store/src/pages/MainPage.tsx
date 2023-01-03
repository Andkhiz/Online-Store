import React/*, { useState } */ from 'react';
import MainInfo from '../components/main/MainInfo';
import MyCategoriesFilter from '../components/main/MyCategoriesFilter';
import MyBrandsFilter from '../components/main/MyBrandsFilter';
import MyInputRange from '../components/main/MyInputRange';
import { ICartLayout } from '../interfase';
import Loader from '../controller/loader';
import { useSearchParams } from 'react-router-dom';

function MainPage ({ setCartPageData, cartPageData, totalCartData, setTotalCartData, getQueryParams }: ICartLayout): JSX.Element {
  const setSearchParams = useSearchParams()[1];
  const loader = new Loader();
  const filters = loader.loadFilters();
  return (
    <main>
      <aside className='side-bar'>
        <div className="side-buttons">
          <button onClick={() => {
            setSearchParams('');
          }}>Reset filter</button>
          <button>Copy link</button>
        </div>
        <MyCategoriesFilter filterElements={filters.categories} loadQuery={getQueryParams}/>
        <MyBrandsFilter filterElements={filters.brands} loadQuery={getQueryParams}/>
        <MyInputRange title='price' rangeData={filters.prices} getQueryParams={getQueryParams}/>
        <MyInputRange title='stock' rangeData={filters.stocks} getQueryParams={getQueryParams}/>
      </aside>
      <MainInfo cartPageData={cartPageData} setCartPageData={setCartPageData} totalCartData={totalCartData}
              setTotalCartData={setTotalCartData} getQueryParams={getQueryParams}/>
    </main>
  );
}
export default MainPage;
