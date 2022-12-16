import React from 'react';
import Header from './Header';
import MainInfo from './main/MainInfo';
import MyFilter from './main/MyFilter';
import MyInputRange from './main/MyInputRange';

function MainPage (): JSX.Element {
  return (
    <div className="App">
      <Header/>
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
    </div>
  );
}
export default MainPage;
