import { Product } from '../Product';

export type Store = {
  products: Product[];
  // sum: number;
  // setSum: () => void;
  incrementAmount: (productId: Product) => void;
  decrementAmount: (productId: Product) => void;
  setProducts: (product: Product) => void;
  removeProduct: (product: Product) => void;
};
