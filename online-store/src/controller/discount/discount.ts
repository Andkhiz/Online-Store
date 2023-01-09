import * as myType from '../../interfase';
import { loadLocalStorage, saveLocalStorage } from '../localStogage/localStorage';

class Discount {
  loadDiscounts (): myType.TDiscounts {
    return loadLocalStorage('myDiscount');
  }

  private saveDiscountLocalStorage (discount: myType.TDiscounts): void {
    saveLocalStorage('myDiscount', discount);
  }

  addDiscount (id: string, name: string, discount: number): void {
    const myDiscount = this.loadDiscounts();
    const itemDiscount = myDiscount.findIndex(el => el.id === id);
    if (itemDiscount === -1) {
      myDiscount.push({ id, name, discount });
      this.saveDiscountLocalStorage(myDiscount);
    }
  }

  deleteDiscount (id: string): void {
    const myDiscount = this.loadDiscounts();
    const itemDiscount = myDiscount.findIndex(el => el.id === id);
    if (itemDiscount !== -1) {
      myDiscount.splice(itemDiscount, 1);
      this.saveDiscountLocalStorage(myDiscount);
    }
  }

  loadTotalDiscount (): number {
    return this.loadDiscounts().reduce((sum, el) => sum + el.discount, 0);
  }
}

export default Discount;
