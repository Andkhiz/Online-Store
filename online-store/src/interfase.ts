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

export interface ICartTotal {
  totalCount: number;
  totalSum: number;
}

interface IDiscount {
  id: string;
  name: string;
  discount: number;
} 

type TDiscounts = IDiscount[];

export interface IElementFilterCategory {
  name: string;
  filterCount: number;
  count: number;
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

export type TFilterQuery = { key: string, value: string };

export interface ICartClass {
  loadCart (): TCarts;
  loadProductsCart (): IProductsCart;
  loadTotalCartData (): ICartTotal;
  addProdurt (idProduct: number, priceProduct: number, stock: number): void;
  decreaseProduct (idProduct: number): void;
  deleteProduct (idProduct: number): void;
}

export interface IStartLoaderClass {
  loadStartFilter (): TFilterReturn;
}

export interface ILoaderClass {
  // startFilter: TFilterReturn;
  // Cart: ICartClass;
  Cart: ICartClass;
  products: IProducts;
  filter: TFilterReturn;
  cartProduts: IProductsCart;
  cartTotalData: ICartTotal;
  cart: TCarts;

  loadProducts (): IProducts;
  loadFilters (): TFilterReturn;
  loadProduct (idProduct: number): IProduct | undefined;
}

export interface ILoaderClassObj { loader: ILoaderClass }
