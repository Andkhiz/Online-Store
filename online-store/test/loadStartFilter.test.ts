import { loadStartFilter } from '../src/controller/loadStartFilters';

const db = { products: [{
  "id":1,
  "title":"iPhone 9",
  "description":"An apple mobile which is nothing like apple",
  "price":549,
  "discountPercentage":12.96,
  "rating":4.69,
  "stock":94,
  "brand":"Apple",
  "category":"smartphones",
  "thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images":[
  "https://i.dummyjson.com/data/products/1/1.jpg",
  "https://i.dummyjson.com/data/products/1/2.jpg",
  "https://i.dummyjson.com/data/products/1/3.jpg",
  "https://i.dummyjson.com/data/products/1/4.jpg",
  "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
  }]};

  const result = {"brands": [{"checked": false, "count": 1, "filterCount": 0, "name": "Apple"}], "categories": [{"checked": false, "count": 1, "filterCount": 0, "name": "smartphones"}], "filter": "", "itemBig": true, "prices": {"max": 549, "min": 549, "startMax": 549, "startMin": 549}, "sort": 
  "Select options", "stocks": {"max": 94, "min": 94, "startMax": 94, "startMin": 94}};

test('get default data for filters', () => {
  expect(loadStartFilter(db)).toStrictEqual(result);
});