import db from './db.json';
import * as myType from '../interfase';

export default class Loader {
  loadProducts (): myType.IProducts {
    return { products: db.products.map((product) => { return Object.assign(product, { onCart: false }); }) };
  }

  parceFilterString (filterString: string): Partial<myType.TFilter> | null {
    const st = filterString.replaceAll('&', '"],"')
      .replaceAll('=', '":["')
      .replaceAll('↕', '","');
    return st === '' ? JSON.parse('{"' + st + '"]}') : {};
  }
}
