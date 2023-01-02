import { TCarts } from '../../interfase';
import { loadLocalStorage } from './localStorage';

export function loadCartLocalStorage (): TCarts {
  return loadLocalStorage('myCart');
}
