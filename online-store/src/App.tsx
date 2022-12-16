import React from 'react';
import './App.scss';
import Header from './components/Header';
import MainInfo from './components/MainInfo';
import MyFilter from './components/MyFilter';
import MyInputRange from './components/MyInputRange';

function App (): JSX.Element {
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
export default App;
