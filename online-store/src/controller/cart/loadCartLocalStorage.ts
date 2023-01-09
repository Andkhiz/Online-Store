import { TCarts } from '../../interfase';
import { loadLocalStorage } from '../localStogage/localStorage';

export function loadCartLocalStorage (): TCarts {
  return loadLocalStorage('myCart');
}
