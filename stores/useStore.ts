import create, { GetState, SetState } from "zustand";
import { persist } from "zustand/middleware";
import { Store } from "../types/Store";

const useStore = create(
  persist<Store>(
    (set: SetState<Store>, get: GetState<Store>) => ({
      products: [],
      // sum: 0,
      // setSum: () => {
      //   set((state) => {
      //     const products = [...state.products];
      //     const sum = state.sum;
      //     for (let i = 0; i < products.length; i++) {
      //       state.sum = sum + products[i].amount * products[i].valor;
      //     }
      //     return {
      //       products,
      //       sum,
      //     };
      //   });
      // },
      setProducts: (product) => {
        set((state) => {
          const products = [...state.products];

          if (!products.find((item) => product.id === item.id)) {
            products.push(product);
            //  get().setSum();
          }

          return {
            products,
          };
        });
      },
      removeProduct: (product) => {
        set((state) => {
          const index = state.products.indexOf(product);
          if (index > -1) {
            {
              products: [...state.products, state.products.splice(index, 1)];
            }
            // get().setSum();
          }
        });
      },
      incrementAmount: (product) =>
        set((state) => {
          const products = [...state.products];
          const index = products.indexOf(product);
          const item = {
            ...product,
            amount: product.amount + 1,
          };

          products[index] = item;

          return { products };
        }),
      decrementAmount: (product) =>
        set((state) => {
          const products = [...state.products];
          const index = products.indexOf(product);
          const item = {
            ...product,
          };

          if (item.amount > 1) {
            item.amount -= 1;
          }

          products[index] = item;

          return { products };
        }),
      getTotalAmount: () =>
        get().products.reduce((acc, curr) => acc + curr.amount * curr.valor, 0),
    }),
    {
      name: "cart-storage", // name of item in the storage (must be unique)
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
