import * as myType from '../../interfase';
import db from '../db.json';

class Cart {
  loadCart (): myType.TCarts {
    const cart = localStorage.getItem('myCart');
    if (cart !== null) {
      try {
        return JSON.parse(cart);
      } catch {
        return [];
      }
    }
    return [];
  }

  loadProductsCart (): myType.IProductsCart {
    const myCart = this.loadCart();
    const arr: myType.IProductsCart = { productsCart: [] };
    myCart.forEach(cart => {
      const elem = db.products.find(el => el.id === cart.id);
      if (elem !== undefined) arr.productsCart.push({ ...elem, ...{ onCart: Boolean(cart.count), cartCount: cart.count } });
    });
    return arr;
  }

  loadTotalCartData (): myType.ICartTotal {
    return this.loadCart().reduce((sum, el) => {
      return {
        totalCount: sum.totalCount + el.count, totalSum: sum.totalSum + el.count * el.price
      };
    }, { totalCount: 0, totalSum: 0 });
  }

  addProdurt (idProduct: number, priceProduct: number, stock: number): void {
    const myCart = this.loadCart();
    const itemCart = myCart.findIndex(el => el.id === idProduct);
    if (itemCart === -1) {
      myCart.push({ id: idProduct, count: 1, price: priceProduct });
    } else {
      if (stock > myCart[itemCart].count) {
        myCart[itemCart].count++;
      }
    }
    localStorage.setItem('myCart', JSON.stringify(myCart));
  }

  decreaseProduct (idProduct: number): void {
    const myCart = this.loadCart();
    const itemCart = myCart.findIndex(el => el.id === idProduct);
    if (itemCart !== -1) {
      if (myCart[itemCart].count === 1) {
        myCart.splice(itemCart, 1);
      } else {
        myCart[itemCart].count--;
      }
      localStorage.setItem('myCart', JSON.stringify(myCart));
    }
  }

  deleteProduct (idProduct: number): void {
    const myCart = this.loadCart();
    const itemCart = myCart.findIndex(el => el.id === idProduct);
    if (itemCart !== -1) {
      myCart.splice(itemCart, 1);
      localStorage.setItem('myCart', JSON.stringify(myCart));
    }
  }
}
/* function cart (): myType.TCarts {
  const cart = localStorage.getItem('myCart');
  if (cart !== null) {
    try {
      return JSON.parse(cart);
    } catch {
      return [];
    }
  }
  return [];
}
*/
export default Cart;
