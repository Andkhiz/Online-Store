import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Products } from './components/view/components';
import { Loader } from './components/controller/loader';
import { Products as Products2 } from './components/view/componenet2';
import NoPage from './components/view/NoPage';
import Layout from './components/view/Layout';
import Home from './components/view/Home';
import Blogs from './components/view/Blog';

/* function App (): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>ghfjggf</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const loader = new Loader();
const e = React.createElement;
/* root.render(
  e(Products, loader.loadProducts())
); */

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={e(Products, loader.loadProducts())} />
            <Route path="blogs" element={e(Products2, loader.loadProducts()) } />
            <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
