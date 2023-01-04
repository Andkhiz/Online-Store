
export function getQueryParams (category: string, value: string, onVisible: boolean): string {
  let myPath = '';
  const oldQuery = window.location.href.indexOf('?') > 0 ? window.location.href.slice(window.location.href.indexOf('?') + 1) : '';
  const arr = oldQuery.split('&');
  let use = false;
  myPath = arr.reduce((query, el) => {
    const myParam = el.split('=');
    if (myParam[0] === category) {
      use = true;
      if (category === 'brand' || category === 'category') {
        if (onVisible) {
          query += el + '↕' + value + '&';
        } else {
          const myValues = myParam[1].split('%E2%86%95');
          myValues.splice(myValues.findIndex(item => item === value), 1);
          if (myValues.length > 0) {
            query += category + '=' + myValues.join('↕') + '&';
          }
        }
      }
      if (category === 'price' || category === 'stock' || category === 'sort' || category === 'filter') {
        if (onVisible) { query += category + '=' + value + '&'; }
      }
    } else {
      query += el + (el === '' ? '' : '&');
    }
    return query;
  }, '');
  if (use) {
    myPath = myPath.slice(0, -1);
  } else {
    if (onVisible) { myPath += category + '=' + value; }
  }
  return myPath;
}
