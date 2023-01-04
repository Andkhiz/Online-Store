import React, { useState, useEffect } from 'react';
import MainInfo from '../components/main/MainInfo';
import MyCategoriesFilter from '../components/main/MyCategoriesFilter';
import MyBrandsFilter from '../components/main/MyBrandsFilter';
import MyInputRange from '../components/main/MyInputRange';
import { ICartLayout, TFilterReturn } from '../interfase';
import { useSearchParams } from 'react-router-dom';
import { loadProducts } from '../controller/loadProgucts';
import { loadFilters } from '../controller/loadFilters';
import { loadStartFilter } from '../controller/loadStartFilters';

function MainPage ({
  setCartPageData, cartPageData, totalCartData, setTotalCartData, getQueryParams
}: ICartLayout): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<TFilterReturn>({
    brands: [],
    categories: [],
    prices: { min: 0, startMin: 0, max: 1000, startMax: 1000 },
    stocks: { min: 0, startMin: 0, max: 100, startMax: 100 },
    sort: 'Select options',
    filter: '',
    itemBig: true
  });

  const loadFilersData = function (): void {
    fetch('db.json', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (responce: Response) => {
        if (!responce.ok) throw new Error(responce.statusText);
        return await responce.json();
      })
      .then((result) => { return { startFilter: loadStartFilter(result), db: result }; })
      .then((result) => { return { startFilter: result.startFilter, products: loadProducts(result.db, searchParams) }; })
      .then((result) => loadFilters(result.products, searchParams, result.startFilter))
      .then(resu => setFilters(resu))
      .catch(error => { throw Error(error); });
  };
  useEffect(() => { loadFilersData(); }, [searchParams]);

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
              setTotalCartData={setTotalCartData} getQueryParams={getQueryParams}
              filter={filters.filter} sort={filters.sort}
      />
    </main>
  );
}
export default MainPage;
