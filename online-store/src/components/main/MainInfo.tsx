import React, { ChangeEvent, useState, useEffect } from 'react';
import Item from './Item';
import { IMainInfo, IProduct } from '../../interfase';
import EmptyMain from './EmptyMain';
import { useSearchParams } from 'react-router-dom';
import { loadProducts } from '../../controller/loadProgucts';
import tile from '../../assets/tile.png';
import line from '../../assets/menu-icon.png';

function MainInfo ({ setCartPageData, cartPageData, totalCartData, setTotalCartData, getQueryParams, filter, sort, itemBig }: IMainInfo): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<IProduct []>([]);
  const [view, setView] = useState(itemBig);

  const loadProductsData = function (params: URLSearchParams): void {
    fetch('db.json', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (responce: Response) => {
        if (!responce.ok) throw new Error(responce.statusText);
        return await responce.json();
      })
      .then((result) => loadProducts(result, params))
      .then((resu) => { setProducts(resu.products); })
      .catch(error => { throw Error(error); });
  };

  useEffect(() => { loadProductsData(searchParams); }, [searchParams]);
  useEffect(() => { setView(itemBig); }, [itemBig]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const query = event.target.value.toLowerCase();
    setSearchParams(getQueryParams('filter', query, !(query === '')));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSearchParams(getQueryParams('sort', event.target.value, true));
  };
  function changeViewToBig (): void {
    setView(true);
    setSearchParams(getQueryParams('itemBig', 'true', true));
  }
  function changeViewToSmall (): void {
    setView(false);
    setSearchParams(getQueryParams('itemBig', 'false', true));
  }
  // console.log(arr.products);
  return (
    <section className='main-info'>
      <div className="main-info-header">
        <form>
          <select value={sort} onChange={handleSelectChange}>
            <option disabled value="Select options">Select options</option>
            <option value="price-ASC">Price ASC</option>
            <option value="price-DESC">Price DESC</option>
            <option value="rating-ASC">Rating ASC</option>
            <option value="rating-DESC">Rating DESC</option>
            <option value="discount-ASC">Discount ASC</option>
            <option value="discount-DESC">Discount DESC</option>
          </select>
        </form>
        <span>Found: {products.length}</span>
        <input type="search" placeholder='Search...' onChange={handleChange} value={filter}/>
        <div className="view-options">
          <button onClick={changeViewToBig}><img src={tile} alt="Big"/></button>
          <button onClick={changeViewToSmall}><img src={line} alt="Small"/></button>
        </div>
      </div>
      <div className={view ? 'main-info-content' : 'horisontal-view'}>
        {products.length === 0
          ? <EmptyMain/>
          : products.map((el) => <Item
          key={el.id}
          product={el}
          setCartPageData={setCartPageData}
          cartPageData={cartPageData}
          totalCartData={totalCartData}
          setTotalCartData={setTotalCartData}
          view={view}
        />)}
      </div>
    </section>
  );
}
export default MainInfo;
