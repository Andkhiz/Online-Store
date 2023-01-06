/**
 * @jest-environment jsdom
 */

import { getQueryParams } from '../src/controller/queryParams/queryParams';

global.window = Object.create(window);
const url = "http://dummy.com";
Object.defineProperty(window, "location", {
    value: {
       href: url
    },
    writable: true
});

test('adds brand Apple to query params string', () => {
  expect(getQueryParams('brand', 'Apple', true)).toBe('brand=Apple');
});
