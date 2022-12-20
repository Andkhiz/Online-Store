import db from './db.json';
import * as myType from '../interfase';
import { useSearchParams } from 'react-router-dom';
import StartLoader from './startLoader';
import Cart from './cart/cart';

export default class Loader {
  static startFilter = new StartLoader().loadStartFilter();
  Cart = new Cart();

  loadProducts (): myType.IProducts {
    // в корзину для теста положено 2 продукта, нужно удалить
    localStorage.setItem('myCart', JSON.stringify([{ id: 1, count: 5, price: 4.8 }, { id: 8, count: 10, price: 20.8 }]));

    const productsCart = this.Cart.loadCart();
    console.log(productsCart);

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
    return myProduct;
  }

  loadFilters (): myType.TFilterReturn {
    const myFilter = Loader.startFilter;
    console.log(myFilter);
    const myProduct = this.loadProducts();

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

    return myFilter;
  }

  loadProduct (idProduct: number): myType.IProduct | undefined {
    const product = db.products.find(prod => prod.id === idProduct);
    if (product === undefined) return undefined;
    const myCart = this.Cart.loadCart().find(el => el.id === idProduct);
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
