/**
 * @jest-environment jsdom
 */

import { number } from 'yargs';
import { getCartQueryParams } from '../src/controller/queryParams/queryCartParams';

global.window = Object.create(window);
const url = "http://dummy.com";
Object.defineProperty(window, "location", {
    value: {
       href: url
    },
    writable: true
});

const testCases = [
  { a: 'page', b: '1', d: 3, expected: '&page=1' },
  { a: 'page', b: '2', d: 1, expected: '&page=2' },
  { a: 'page', b: '2', d: 3, expected: '&page=2' },
]

test(`adds data to query cart params string`, () => {
  testCases.forEach(({a, b, d, expected}) => {
    const result = getCartQueryParams(a as string, b as string, d as number);
    expect(result).toBe(expected);
  })
});
