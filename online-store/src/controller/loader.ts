import db from './db.json';
import * as myType from '../interfase';

export default class Loader {
  loadProducts (): myType.IProducts {
    // const params = useParams();
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log('------');
    // console.log(params);
    // console.log(searchParams.get('name'));
    // console.log('---222---');
    // console.log(this.parceFilterString());
    // console.log(setSearchParams);
    const myProduct = { products: db.products.map((product) => { return Object.assign(product, { onCart: false }); }) };
    const params = this.parceFilterString();
    for (const el in params) {
      if (el === 'brand' || el === 'category') {
        myProduct.products = myProduct.products.filter(product => params[el]?.includes(product[el]));
      }
      if (el === 'price' || el === 'stock') {
        const a = params[el];
        if (typeof a !== 'undefined') {
          a.map(el => Number(el));
          myProduct.products = myProduct.products.filter(product => product[el] >= a[0] && product[el] <= a[1]);
        }
      }
    }

    return myProduct;
  }

  parceFilterString (): Partial<myType.TFilter> | null {
    let st = window.location.href.indexOf('?') > 0 ? window.location.href.slice(window.location.href.indexOf('?') + 1) : '';
    if (st === '') return {};
    st = st.replaceAll('&', '"],"')
      .replaceAll('=', '":["')
      .replaceAll('%E2%86%95', '","');
    st = '{"' + st + '"]}';
    try {
      return JSON.parse(st);
    } catch (error) {
      return null;
    }
  }
}
