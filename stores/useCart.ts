import create, { GetState } from "zustand";
import { persist } from "zustand/middleware";
import { WritableDraft } from "immer/dist/internal";
import immer from "./config";
import { NamedSet } from "zustand/middleware";
import { StoreApi } from "zustand";

export type Product = {
  id: number;
  nome: string;
  img: string;
  valor: number;
};

export type Store = {
  products: Product[];
  add: (product: Product) => void;
};

export type StateDraft = (
  partial: Store | ((draft: WritableDraft<Store>) => void),
  replace?: boolean,
  name?: string
) => void;

const products = [] as Product[];

export const createProductsSlice = (set: StateDraft, get: GetState<Store>) => ({
  products: products,
  add: (product: Product) => {
    set((draft) => {
      draft.products.push(product);
    });
  },
});

const stateCreator = immer<
  Store,
  NamedSet<Store>,
  GetState<Store>,
  StoreApi<Store>
>((set, get) => ({
  products: createProductsSlice(set, get),
}));

const useCartStore = create<Store>(stateCreator);

export default useCartStore;
