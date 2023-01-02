import { IProduct, IProductsCart, TProductsDB } from '../../interfase';
import { loadCartLocalStorage } from './loadCartLocalStorage';

export function loadProductsCart (db: TProductsDB): IProductsCart {
  console.log('db');
  console.log(db);
  const myCart = loadCartLocalStorage();
  console.log(myCart);
  const arr: IProductsCart = { productsCart: [] };
  myCart.forEach(cart => {
    if (Array.isArray(db.products)) {
      const elem = db.products.find(el => el.id === cart.id);
      if (elem !== undefined) arr.productsCart.push({ ...elem, ...{ onCart: Boolean(cart.count), cartCount: cart.count } });
    }
  });
  return arr;
}
