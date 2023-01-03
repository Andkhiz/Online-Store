import * as myType from '../interfase';

export function loadStartFilter (db: myType.IProductsDB): myType.TFilterReturn {
  const myProduct = db.products;
  const category: myType.IElementFilterCategory [] = [];
  const brand: myType.IElementFilterCategory [] = [];
  let priceMin = myProduct[0].price;
  let priceMax = myProduct[0].price;
  let stockMin = myProduct[0].stock;
  let stockMax = myProduct[0].stock;

  myProduct.forEach(product => {
    let prod = (category.findIndex(el => el.name === product.category));
    if (prod >= 0) category[prod].count++;
    else category.push({ name: product.category, filterCount: 0, count: 1, checked: false });

    prod = (brand.findIndex(el => el.name === product.brand));
    if (prod >= 0) brand[prod].count++;
    else brand.push({ name: product.brand, filterCount: 0, count: 1, checked: false });

    if (priceMin > product.price) priceMin = product.price;
    if (priceMax < product.price) priceMax = product.price;
    if (stockMin > product.stock) stockMin = product.price;
    if (stockMax < product.stock) stockMax = product.price;
  });
  brand.sort((a, b) => { if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0; });
  category.sort((a, b) => { if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0; });

  console.log('create StartFilter');
  return {
    brands: brand,
    categories: category,
    prices: {
      startMin: priceMin,
      startMax: priceMax,
      min: priceMin,
      max: priceMax
    },
    stocks: {
      startMin: stockMin,
      startMax: stockMax,
      min: stockMin,
      max: stockMax
    },
    sort: 'Select options',
    filter: ''
  };
}
