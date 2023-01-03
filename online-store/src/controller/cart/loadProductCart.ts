import { IProduct, IProductsCart, IProductsDB } from '../../interfase';
import { loadCartLocalStorage } from './loadCartLocalStorage';

export function loadProductsCart (db: IProductsDB): IProductsCart {
  const myCart = loadCartLocalStorage();
  const arr: IProductsCart = { productsCart: [] };
  myCart.forEach(cart => {
    if (Array.isArray(db.products)) {
      const elem = db.products.find(el => el.id === cart.id);
      if (elem !== undefined) arr.productsCart.push({ ...elem, ...{ onCart: Boolean(cart.count), cartCount: cart.count } });
    }
  });
  return arr;
}
