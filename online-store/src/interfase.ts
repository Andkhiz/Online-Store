
export interface IProduct {
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
  onCart?: boolean;
  cartCount: number;
};

export interface IProducts { products: IProduct []};

export interface IRenderProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string;
  onCart?: boolean;
  quantity: number;
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
