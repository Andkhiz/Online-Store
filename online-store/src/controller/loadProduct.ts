import { IProduct, IProductsDB } from '../interfase';
import { loadCartLocalStorage } from './cart/loadCartLocalStorage';

export function loadProduct (db: IProductsDB, idProduct: number): IProduct | undefined {
  const product = db.products.find(prod => prod.id === idProduct);
  if (product === undefined) return undefined;
  const myCart = loadCartLocalStorage().find(el => el.id === idProduct);
  const cartCount = myCart === undefined ? 0 : myCart.count;
  return Object.assign(product, { onCart: Boolean(cartCount), cartCount });
}
