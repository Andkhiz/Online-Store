import React from 'react';
import MainInfo from '../components/main/MainInfo';
import MyCategoriesFilter from '../components/main/MyCategoriesFilter';
import MyBrandsFilter from '../components/main/MyBrandsFilter';
import MyInputRange from '../components/main/MyInputRange';
import { ICartLayout } from '../interfase';
// import StartLoader from '../controller/startLoader';
import Loader from '../controller/loader';

function MainPage ({ setCartPageData, cartPageData }: ICartLayout): JSX.Element {
  const loader = new Loader();
  const brands = loader.loadFilters().brands;
  const categories = loader.loadFilters().categories;
  const prices = loader.loadFilters().prices;
  const stocks = loader.loadFilters().stocks;
  const sort = loader.loadFilters().sort;
  const filter = loader.loadFilters().filter;
  return (
    <main>
      <aside className='side-bar'>
        <div className="side-buttons">
          <button>Reset filter</button>
          <button>Copy link</button>
        </div>
        <MyCategoriesFilter brands={brands} categories={categories} prices={prices} stocks={stocks} sort={sort} filter={filter}/>
        <MyBrandsFilter brands={brands} categories={categories} prices={prices} stocks={stocks} sort={sort} filter={filter}/>
        <MyInputRange title='Price'/>
        <MyInputRange title='Stock'/>
      </aside>
      <MainInfo cartPageData={cartPageData} setCartPageData={setCartPageData}/>
    </main>
  );
}
export default MainPage;
