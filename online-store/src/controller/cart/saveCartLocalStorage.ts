import { TCarts } from '../../interfase';
import { saveLocalStorage } from '../localStogage/localStorage';

export function saveCartLocalStorage (myCart: TCarts): void {
  saveLocalStorage('myCart', myCart);
}
