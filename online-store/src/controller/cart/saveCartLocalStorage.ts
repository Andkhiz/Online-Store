import { TCarts } from '../../interfase';
import { saveLocalStorage } from './localStorage';

export function saveCartLocalStorage (myCart: TCarts): void {
  saveLocalStorage('myCart', myCart);
}
