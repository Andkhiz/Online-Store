import * as myType from '../../interfase';
import { loadLocalStorage, saveLocalStorange } from './localStorage';

class Discount {
  loadDiscounts(): myType.TDiscounts {
    return loadLocalStorage('myDiscount');
  }

  addDiscount(id: string, name: string, discount: number): void {
    const myDiscount = this.loadDiscounts();
    const itemDiscount = myDiscount.findIndex(el => el.id === id);
    if (itemDiscount === -1) {
      myDiscount.push({ id, name, discount });
      saveLocalStorange('myDiscount', myDiscount);
    }
  }

  deleteDiscount(id: string): void {
    const myDiscount = this.loadDiscounts();
    const itemDiscount = myDiscount.findIndex(el => el.id === id);
    if (itemDiscount !== -1) {
      myDiscount.splice(itemDiscount, 1);
      saveLocalStorange('myDiscount', myDiscount);
    }
  }

  loadTotalDiscount (): number {
    return this.loadDiscounts().reduce((sum, el) => sum + el.discount, 0 );
  }
}