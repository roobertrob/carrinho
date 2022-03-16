import { Product } from '../Product';

export type Store = {
  products: Product[];
  setProducts: (product: Product) => void;
  removeProduct: (product: Product) => void;
};
