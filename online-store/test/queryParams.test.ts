/**
 * @jest-environment jsdom
 */

import { number } from 'yargs';
import { getQueryParams } from '../src/controller/queryParams/queryParams';

global.window = Object.create(window);
const url = "http://dummy.com";
Object.defineProperty(window, "location", {
    value: {
       href: url
    },
    writable: true
});

const testCases = [
  { a: 'brand', b: 'Apple', d: true, expected: 'brand=Apple' },
  { a: 'category', b: 'ipad', d: true, expected: 'category=ipad' },
  { a: 'category', b: 'ipad', d: false, expected: '' },
]

test('adds data to query params string', () => {
  testCases.forEach(({a, b, d, expected}) => {
    const result = getQueryParams(a as string, b as string, d as boolean);
    expect(result).toBe(expected);
  })
});
