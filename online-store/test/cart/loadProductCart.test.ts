/**
 * @jest-environment jsdom
 */

import { loadProductsCart } from '../../src/controller/cart/loadProductCart';

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
  ],
  onCart: false,
  cartCount: 0
  }]};

  var localStorageMock = (function() {
    var store = {};
    return {
      getItem: function(key) {
        return store[key];
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      },
      removeItem: function(key) {
        delete store[key];
      }
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  
  const result = { productsCart: []};

test('get default data for filters', () => {
  expect(loadProductsCart(db)).toStrictEqual(result);
});