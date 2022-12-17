import React from 'react';
import MainInfo from '../components/main/MainInfo';
import MyFilter from '../components/main/MyFilter';
import MyInputRange from '../components/main/MyInputRange';

function MainPage (): JSX.Element {
  return (
    <main>
      <aside className='side-bar'>
        <div className="side-buttons">
          <button>Reset filter</button>
          <button>Copy link</button>
        </div>
        <MyFilter title='Category'/>
        <MyFilter title='brand'/>
        <MyInputRange title='Price'/>
        <MyInputRange title='Stock'/>
      </aside>
      <MainInfo/>
    </main>
  );
}
export default MainPage;
