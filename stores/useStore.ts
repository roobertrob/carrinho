import { WritableDraft } from "immer/dist/internal";
import create, { GetState } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  id: number;
  nome: string;
  img: string;
  valor: number;
  removeProduct?: (
    product: Product,
  ) => void;
};

export type StateDraft = (
  partial: Store | ((draft: WritableDraft<Store>) => void),
  replace?: boolean,
  name?: string
) => void;

export type Store = {
  products: Product[];
  setProducts: (product: Product) => void;
  removeProduct: (
    product: Product,
  ) => void;
};

const useStore = create(
  persist<Store>(
    (set: StateDraft, get: any) => ({
      products: [],
      setProducts: (product) => {
        set((state) =>
          !state.products.includes(product)
            ? { products: [...state.products, product] }
            : [...state.products]
        );
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
      name: "cart-storage1", // name of item in the storage (must be unique)
      getStorage: () => localStorage,
      // serialize: (state) => JSON.stringify(state.state),
      // deserialize: (state) => JSON.parse(state),
    }
  )
);

export default useStore;
