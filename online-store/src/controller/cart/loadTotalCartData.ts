import { ICartTotal } from '../../interfase';
import { loadCartLocalStorage } from './loadCartLocalStorage';

export function loadTotalCartData (): ICartTotal {
  return loadCartLocalStorage().reduce((sum, el) => {
    return {
      totalCount: sum.totalCount + el.count, totalSum: sum.totalSum + el.count * el.price
    };
  }, { totalCount: 0, totalSum: 0 });
}
