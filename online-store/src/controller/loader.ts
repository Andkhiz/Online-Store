import db from './db.json';
import * as myType from '../interfase';
import { useSearchParams } from 'react-router-dom';
import StartLoader from './startLoader';
import Cart from './cart/cart';

export default class Loader {
  static startFilter = new StartLoader().loadStartFilter();
  // Cart: myType.ICartClass;
  // Cart = new Cart();
  // Cart = new Cart();
  Cart: myType.ICartClass;
  products: myType.IProducts;
  filter: myType.TFilterReturn;
  cartProduts: myType.IProductsCart;
  cartTotalData: myType.ICartTotal;
  cart: myType.TCarts;

  constructor () {
    this.Cart = new Cart();
    this.products = this.loadProducts();
    this.filter = this.loadFilters();
    this.cartProduts = this.Cart.loadProductsCart();
    this.cartTotalData = this.Cart.loadTotalCartData();
    this.cart = this.Cart.loadCart();
  }

  loadProducts (): myType.IProducts {
    const productsCart = this.cart === undefined ? this.Cart.loadCart() : this.cart;
    console.log('Load Products');
    console.log(productsCart);

    const myProduct = {
      products: db.products.map((product) => {
        const cart = productsCart.find(el => el.id === product.id);
        const cartCount = cart === undefined ? 0 : cart.count;
        return Object.assign(product, { onCart: Boolean(cartCount), cartCount });
      })
    };

    const searchParams = this.parceFilterString();
    console.log('searchParams');
    console.log(searchParams);
    // const searchParams = useSearchParams()[0];
    const BreakError: Error = { name: 'continue', message: 'myMessage' };

    searchParams.forEach(el => {
      if (el !== undefined) {
        try {
          console.log('//////////////');
          const key = el.key;
          console.log(el);
          console.log(key);
          const arr = el.value.split('%E2%86%95'/* '↕' */);
          console.log(arr);
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
          if (el.key === 'sort') {
            const arSort = el.value.split('-');
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
          if (el.key === 'filter') {
            myProduct.products = myProduct.products.filter(product => product.brand.includes(el.value) ||
              product.category.includes(el.value) || product.description.includes(el.value) ||
              product.title.includes(el.value) || String(product.price).includes(el.value) ||
              String(product.discountPercentage).includes(el.value) || String(product.rating).includes(el.value) ||
              String(product.stock).includes(el.value));
            throw BreakError;
          }
          console.log('error');
          myProduct.products = [];
        } catch (er) {
          if (er !== BreakError) throw er;
        }
      }
    });
    return myProduct;
  }

  loadFilters (): myType.TFilterReturn {
    const myFilter = Loader.startFilter;
    console.log('Load Filters');
    console.log(myFilter);
    // const myProduct = this.loadProducts();
    const myProduct = this.products === undefined ? this.loadProducts() : this.products;

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
    const cartStorange = this.cart === undefined ? this.Cart.loadCart() : this.cart;
    const myCart = cartStorange.find(el => el.id === idProduct);
    const cartCount = myCart === undefined ? 0 : myCart.count;
    return Object.assign(product, { onCart: Boolean(cartCount), cartCount });
  }

  parceFilterString (): myType.TFilterQuery [] {
    let st = window.location.href.indexOf('?') > 0 ? window.location.href.slice(window.location.href.indexOf('?') + 1) : '';
    if (st === '') return [];
    st = st.replaceAll('&', '"}, { "key":"')
      .replaceAll('=', '", "value":"');
    // .replaceAll('%E2%86%95', '","');
    st = '[{"key":"' + st + '"}]';
    console.log('st = ' + st);
    try {
      return JSON.parse(st);
    } catch (error) {
      return [];
    }
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
