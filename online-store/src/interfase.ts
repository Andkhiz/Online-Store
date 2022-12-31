export interface IProductDB {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string [];
}

export interface IProduct extends IProductDB {
  onCart?: boolean;
  cartCount: number;
};

export interface IProducts { products: IProduct []};

export interface IRenderProduct {
  title: string;
  category: string;
};

interface ICart {
  id: number;
  count: number;
  price: number;
};

export type TCarts = ICart[];

export interface IProductsCart { productsCart: IProduct [] }

export interface IProductsCartRender extends IProduct {
  setState: Function;
}

export interface ICartTotal {
  totalCount: number;
  totalSum: number;
}

interface IDiscount {
  id: string;
  name: string;
  discount: number;
}

export type TDiscounts = IDiscount[];

export interface IElementFilterCategory {
  name: string;
  filterCount: number;
  count: number;
  checked: boolean;
}

export interface IElementFilterCategoryRender extends IElementFilterCategory {
  category: string;
  loadQuery: Function;
  // searchParams: URLSearchParams;
  // setSearchParams: Function;
}

interface IElementFilterMinMax {
  startMin: number;
  startMax: number;
  min: number;
  max: number;
}

export type TSort = ''|"price-ASC"|"price-DESC"|"rating-ASC"|"rating-DESC"|"discount-ASC"|"discount-DESC";

export type TFilter = {
  brand: string[];
  category: string[];
  price: [number, number];
  stock: [number, number];
  sort: TSort;
  filter: string;
}

/* при определении можно использовать Partial<TFilterReturn> - все элементы необязательные тогда */
export type TFilterReturn = {
  brands: IElementFilterCategory[];
  categories: IElementFilterCategory[];
  prices: IElementFilterMinMax;
  stocks: IElementFilterMinMax;
  sort: TSort;
  filter: string;
};

export interface ICartLayout {
  // isEmpty: boolean;
  setCartPageData: Function;
  cartPageData: IProduct[];
}


export interface IPromo {
  id: string;
  name: string;
  discountPercentage: number;
  promocodeUsed: Array<string>;
  setPromocodeUsed: Function;
}
export interface modalId {
  isOpened: boolean;
  setIsOpened: Function;
}

export interface IFilterData {
  filterElements: IElementFilterCategory[];
  loadQuery: Function;
}

export type TRange = {
  title: string;
  rangeData: IElementFilterMinMax;
  loadQuery: Function;
}