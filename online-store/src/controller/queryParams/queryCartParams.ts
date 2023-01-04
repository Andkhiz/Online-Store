export function getCartQueryParams (category: string, value: string, cartLength: number): string {
  console.log(category);
  console.log(value);
  let myPath = '';
  const oldQuery = window.location.href.indexOf('?') > 0 ? window.location.href.slice(window.location.href.indexOf('?') + 1) : '';
  const arr = oldQuery.split('&');
  let use = false;
  myPath = arr.reduce((query, el) => {
    const myParam = el.split('=');
    if (myParam[0] === category) {
      use = true;
      if (category === 'page') {
        query += `page=${value}&`;
      }
      if (category === 'limit') {
        query += `limit=${value}&`;
      }
    } else {
      if (category === 'limit' && myParam[0] === 'page' && Math.ceil(cartLength / Number(value)) < Number(myParam[1])) {
        query += `page=${Math.ceil(cartLength / Number(value))}&`;
      } else {
        query += el + '&';
      }
    }
    return query;
  }, '');

  console.log('----------');
  console.log(myPath);
  if (use) {
    myPath = myPath.slice(0, -1);
  } else {
    myPath += category + '=' + value;
  }
  return myPath;
}
