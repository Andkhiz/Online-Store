import { IProductsDB, IProducts } from '../interfase';
import { loadCartLocalStorage } from './cart/loadCartLocalStorage';

export function loadProducts (db: IProductsDB, params: URLSearchParams): IProducts {
  const productsCart = loadCartLocalStorage();
  const myProduct = {
    products: db.products.map((product) => {
      const cart = productsCart.find(el => el.id === product.id);
      const cartCount = cart === undefined ? 0 : cart.count;
      return Object.assign(product, { onCart: Boolean(cartCount), cartCount });
    })
  };
  const searchParams = params;
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
      if (key === 'itemBig') {
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
