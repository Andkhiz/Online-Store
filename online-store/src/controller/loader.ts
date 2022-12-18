import db from './db.json';
import * as myType from '../interfase';
import { useSearchParams } from 'react-router-dom';
import StartLoader from './startLoader';

export default class Loader {
  startFilter = new StartLoader().loadStartFilter();

  loadProducts (): myType.IProducts {
    const myProduct = { products: db.products.map((product) => { return Object.assign(product, { onCart: false }); }) };
    const searchParams = useSearchParams()[0];
    const BreakError: Error = { name: 'continue', message: 'myMessage' };

    searchParams.forEach((el, key) => {
      try {
        const arr = el.split('↕');
        if (key === 'brand' || key === 'category') {
          myProduct.products = myProduct.products.filter(product => arr.includes(product[key]));
          throw BreakError;
        }
        if (key === 'price' || key === 'stock') {
          if (arr.length === 2) {
            const arrPar = arr.map(el => Number(el));
            myProduct.products = myProduct.products.filter(product => product[key] >= arrPar[0] && product[key] <= arrPar[1]);
            throw BreakError;
          }
        }
        if (key === 'sort') {
          const arSort = el.split('-');
          if (arSort[0] === 'discount') arSort[0] = 'discountPercentage';
          if (arSort.length === 2 &&
              (arSort[0] === 'price' || arSort[0] === 'rating' || arSort[0] === 'discountPercentage') &&
              (arSort[1] === 'ASC' || arSort[1] === 'DESC')) {
            const e = arSort[0];
            if (arSort[1] === 'ASC') {
              myProduct.products.sort((a, b) => a[e] - b[e]);
            } else {
              myProduct.products.sort((a, b) => b[e] - a[e]);
            }
            throw BreakError;
          }
        }
        if (key === 'filter') {
          myProduct.products = myProduct.products.filter(product => product.brand.includes(el) ||
            product.category.includes(el) || product.description.includes(el) ||
            product.title.includes(el) || String(product.price).includes(el) ||
            String(product.discountPercentage).includes(el) || String(product.rating).includes(el) ||
            String(product.stock).includes(el));
          throw BreakError;
        }
        console.log('error');
        myProduct.products = [];
      } catch (er) {
        if (er !== BreakError) throw er;
      }
    });
    console.log(this.startFilter);
    return myProduct;
  }

  /* parceFilterString (): Partial<myType.TFilter> | null {
    let st = window.location.href.indexOf('?') > 0 ? window.location.href.slice(window.location.href.indexOf('?') + 1) : '';
    if (st === '') return {};
    st = st.replaceAll('&', '"],"')
      .replaceAll('=', '":["')
      .replaceAll('%E2%86%95', '","');
    st = '{"' + st + '"]}';
    try {
      return JSON.parse(st);
    } catch (error) {
      return null;
    }
  } */
}
