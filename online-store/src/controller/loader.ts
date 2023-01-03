import db from './db.json';
import * as myType from '../interfase';
import { useSearchParams } from 'react-router-dom';
import StartLoader from './startLoader';
import Cart from './cart/cart';
import { loadCartLocalStorage } from './cart/loadCartLocalStorage';

export default class Loader {
  static startFilter = new StartLoader().loadStartFilter();
  Cart = new Cart();
  // loadQuer = this.loadQuery;

  /* loadProducts (): myType.IProducts {
    const productsCart = loadCartLocalStorage(); // this.Cart.loadCart();
    // console.log(productsCart);
    const myProduct = {
      products: db.products.map((product) => {
        const cart = productsCart.find(el => el.id === product.id);
        const cartCount = cart === undefined ? 0 : cart.count;
        return Object.assign(product, { onCart: Boolean(cartCount), cartCount });
      })
    };

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
            const arrPar = arr.map(el => Number.parseInt(el));
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
          myProduct.products = myProduct.products.filter(product => product.brand.toLowerCase().includes(el) ||
            product.category.toLowerCase().includes(el) || product.description.toLowerCase().includes(el) ||
            product.title.toLowerCase().includes(el) || String(product.price).includes(el) ||
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
    return myProduct;
  }

  /* loadFilters (): myType.TFilterReturn {
    const myFilter: myType.TFilterReturn = JSON.parse(JSON.stringify(Loader.startFilter));
    // console.log(myFilter);
    const myProduct = this.loadProducts();

    if (myProduct.products.length > 0) {
      myFilter.prices.max = myProduct.products[0].price;
      myFilter.prices.min = myProduct.products[0].price;
      myFilter.stocks.max = myProduct.products[0].stock;
      myFilter.stocks.min = myProduct.products[0].stock;
      myProduct.products.forEach(product => {
        myFilter.brands[myFilter.brands.findIndex(el => el.name === product.brand)].filterCount++;
        myFilter.categories[myFilter.categories.findIndex(el => el.name === product.category)].filterCount++;
        if (myFilter.prices.min > product.price) myFilter.prices.min = product.price;
        if (myFilter.prices.max < product.price) myFilter.prices.max = product.price;
        if (myFilter.stocks.min > product.stock) myFilter.stocks.min = product.price;
        if (myFilter.stocks.max < product.stock) myFilter.stocks.max = product.price;
      });
    }

    const searchParams = useSearchParams()[0];
    searchParams.forEach((el, key) => {
      if (key === 'brand' || key === 'category') {
        const prop = key === 'brand' ? 'brands' : 'categories';
        el.split('↕').forEach(brandFilter => { myFilter[prop][myFilter[prop].findIndex(b => b.name === brandFilter)].checked = true; });
      }
      if (key === 'price' || key === 'stock') {
        const arr = el.split('↕').map(el => Number.parseInt(el));
        if (arr.length === 2) {
          const prop = key === 'price' ? 'prices' : 'stocks';
          myFilter[prop].min = arr[0];
          myFilter[prop].max = arr[1];
        }
      }
      if (key === 'sort' && (el === 'price-ASC' || el === 'price-DESC' ||
        el === 'rating-ASC' || el === 'rating-DESC' || el === 'discount-ASC' || el === 'discount-DESC')) {
        myFilter.sort = el;
      }
      if (key === 'filter') {
        myFilter.filter = el;
      }
    });
    return myFilter;
  } */

  loadProduct (idProduct: number): myType.IProduct | undefined {
    const product = db.products.find(prod => prod.id === idProduct);
    if (product === undefined) return undefined;
    const myCart = loadCartLocalStorage().find(el => el.id === idProduct);
    const cartCount = myCart === undefined ? 0 : myCart.count;
    return Object.assign(product, { onCart: Boolean(cartCount), cartCount });
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
