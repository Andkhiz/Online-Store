import { IGeneralCartData } from '../../interfase';

export function parceCartParams (params: URLSearchParams): IGeneralCartData {
  const generalCartData = { page: 1, limit: 3 };
  params.forEach((el, key) => {
    if (key === 'limit') generalCartData.limit = Number.parseInt(el);
    if (key === 'page') generalCartData.page = Number.parseInt(el);
  });

  return generalCartData;
}
