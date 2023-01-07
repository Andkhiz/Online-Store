/**
 * @jest-environment jsdom
 */

import { saveCartLocalStorage } from '../../src/controller/cart/saveCartLocalStorage';

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

const result = '[]';
const result1 = '[{"id":0,"count":2,"price":500}]';

test('get default data for filters', () => {
  saveCartLocalStorage([]);
  expect(localStorage.getItem('myCart')).toStrictEqual(result);
  saveCartLocalStorage([{id: 0, count: 2, price: 500}]);
  expect(localStorage.getItem('myCart')).toBe(result1);
});