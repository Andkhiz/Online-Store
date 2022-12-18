import * as myType from '../../interfase';

function cart (): myType.TCarts {
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

export default cart;
