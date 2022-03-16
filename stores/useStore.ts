import create, { GetState, SetState } from 'zustand';
import { persist } from 'zustand/middleware';
import { Store } from '../types/Store';

const useStore = create(
  persist<Store>(
    (set: SetState<Store>, get: GetState<Store>) => ({
      products: [],

      setProducts: (product) => {
        set((state) => {
          const products = [...state.products];

          if (!products.find((item) => product.id === item.id)) {
            products.push(product);
          }

          return {
            products,
          };
        });
      },
      removeProduct: (product) => {
        set((state) => {
          const index = state.products.indexOf(product);
          index > -1
            ? { products: [...state.products, state.products.splice(index, 1)] }
            : [...state.products];
        });
      },
    }),
    {
      name: 'cart-storage', // name of item in the storage (must be unique)
      getStorage: () => localStorage,
    },
  ),
);

export default useStore;
