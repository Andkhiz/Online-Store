import React from 'react';
import MainInfo from '../components/main/MainInfo';
import MyCategoriesFilter from '../components/main/MyCategoriesFilter';
import MyBrandsFilter from '../components/main/MyBrandsFilter';
import MyInputRange from '../components/main/MyInputRange';
// import Loader from '../controller/loader';
import { ILoaderClassObj } from '../interfase';

function MainPage (loader: ILoaderClassObj): JSX.Element {
  // const loader = new Loader();
  return (
    <main>
      <aside className='side-bar'>
        <div className="side-buttons">
          <button>Reset filter</button>
          <button>Copy link</button>
        </div>
        <MyCategoriesFilter category='' title='Category' { ...loader }/>
        <MyBrandsFilter category='' title='Brands'/>
        <MyInputRange title='Price'/>
        <MyInputRange title='Stock'/>
      </aside>
      <MainInfo { ...loader }/>
    </main>
  );
}
export default MainPage;
