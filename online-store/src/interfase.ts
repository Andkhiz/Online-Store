
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
  onCart: boolean;
};

export interface IProducts { products: IProduct []};

export interface IRenderProduct {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string [];
  onCart?: boolean;
};

interface ICart {
  id: number;
  count: number;
  price: number;
};

export type ICarts = ICart[];

interface IDiscount {
  id: string;
  name: string;
  discount: number;
} 

type TDiscounts = IDiscount[];

interface IElementFilterCategory {
  name: string;
  filerCount: number;
  count: number;
}

interface IElementFilterMinMax {
  min: number;
  max: number;
}

export type TSort = null|"price-ASC"|"price-DESC"|"rating-ASC"|"ratng-DESC"|"discount-ASC"|"discount-DESC";

export type TFilter = {
  brands: string[];
  categories: string[];
  prices: [number, number];
  stocks: [number, number];
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
}
