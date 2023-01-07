/**
 * @jest-environment jsdom
 */

import { parceCartParams } from '../../src/controller/cart/parceCartParams';

  const result = { page: 1, limit: 3 };
  const result1 = { page: 2, limit: 3 };
  const result2 = { page: 1, limit: 4 };

test('get default data for filters', () => {
  expect(parceCartParams(new URLSearchParams('') )).toStrictEqual(result);
  expect(parceCartParams(new URLSearchParams('page=2') )).toStrictEqual(result1);
  expect(parceCartParams(new URLSearchParams('limit=4') )).toStrictEqual(result2);
});