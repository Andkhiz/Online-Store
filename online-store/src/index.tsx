import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* import { Products } from './components/view/components';
import { Loader } from './components/controller/loader';
import { Products as Products2 } from './components/view/componenet2'; */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/* const loader = new Loader();
const e = React.createElement;
root.render(
  e(Products, loader.loadProducts())
);

root.render(
  e(Products2, loader.loadProducts())
); */

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
