import React from 'react';
import MainInfo from '../components/main/MainInfo';
import MyCategoriesFilter from '../components/main/MyCategoriesFilter';
import MyBrandsFilter from '../components/main/MyBrandsFilter';
import MyInputRange from '../components/main/MyInputRange';

function MainPage (): JSX.Element {
  return (
    <main>
      <aside className='side-bar'>
        <div className="side-buttons">
          <button>Reset filter</button>
          <button>Copy link</button>
        </div>
        <MyCategoriesFilter category='' title='Category'/>
        <MyBrandsFilter category='' title='brand'/>
        <MyInputRange title='Price'/>
        <MyInputRange title='Stock'/>
      </aside>
      <MainInfo/>
    </main>
  );
}
export default MainPage;
