import create from "zustand";
import produce, { original } from 'immer';
import { persist } from "zustand/middleware"

export const useCart = create(persist(

    set => {
        const setState = fn =>set(produce(fn));
        return {
            state: {
                products: [],
            },

            actions: {
                toggle: () =>
                    setState(({ state }) => {
                        state.open = !state.open
                    }),

                add: (product) => setState(({ state }) => {
                    if (!state.products.includes(product)) {
                        state.products.push(product)
                    }
                }),
                remove: () => setState(({ state }) => {
                    const index = state.products.indexOf(product);
                    if (index > -1) {
                        state.products.splice(index, 1)
                    }
                }),
            }
        }
    },
    {
        name: "cart-storage", // name of item in the storage (must be unique)

    }
))
export default useCart;