import * as myType from '../interfase';

export function loadFilters (myProduct: myType.IProducts, searchParams: URLSearchParams, startFilter: myType.TFilterReturn): myType.TFilterReturn {
  const myFilter: myType.TFilterReturn = JSON.parse(JSON.stringify(startFilter));
  // console.log(myFilter);
  // const myProduct = this.loadProducts();

  searchParams.forEach((el, key) => {
    if (key === 'brand' || key === 'category') {
      const prop = key === 'brand' ? 'brands' : 'categories';
      el.split('↕').forEach(brandFilter => { myFilter[prop][myFilter[prop].findIndex(b => b.name === brandFilter)].checked = true; });
    }
    if (key === 'price' || key === 'stock') {
      const arr = el.split('↕').map(el => Number.parseInt(el));
      if (arr.length === 2) {
        const prop = key === 'price' ? 'prices' : 'stocks';
        myFilter[prop].min = arr[0];
        myFilter[prop].max = arr[1];
      }
    }
    if (key === 'sort' && (el === 'price-ASC' || el === 'price-DESC' ||
      el === 'rating-ASC' || el === 'rating-DESC' || el === 'discount-ASC' || el === 'discount-DESC')) {
      myFilter.sort = el;
    }
    if (key === 'filter') {
      myFilter.filter = el;
    }
    if (key === 'itemBig' && ((el === 'true') || (el === 'false'))) {
      if (el === 'true') {
        myFilter.itemBig = true;
      } else {
        myFilter.itemBig = false;
      }
    }
  });

  if (myProduct.products.length > 0) {
    myFilter.prices.max = myProduct.products[0].price;
    myFilter.prices.min = myProduct.products[0].price;
    myFilter.stocks.max = myProduct.products[0].stock;
    myFilter.stocks.min = myProduct.products[0].stock;
    myProduct.products.forEach(product => {
      myFilter.brands[myFilter.brands.findIndex(el => el.name === product.brand)].filterCount++;
      myFilter.categories[myFilter.categories.findIndex(el => el.name === product.category)].filterCount++;
      if (myFilter.prices.min > product.price) myFilter.prices.min = product.price;
      if (myFilter.prices.max < product.price) myFilter.prices.max = product.price;
      if (myFilter.stocks.min > product.stock) myFilter.stocks.min = product.stock;
      if (myFilter.stocks.max < product.stock) myFilter.stocks.max = product.stock;
    });
  }
  return myFilter;
}
