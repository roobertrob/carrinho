import create from "zustand";
import produce, { original } from 'immer';
import { persist } from "zustand/middleware"

export const useCart = create(persist(

    set => {
        const setState = (fn) => {set(produce(fn))};
        return {
            state: {
                products: [],
            },

            actions: {
                add: (product) => setState(({ state }) => {
                    if (!state.products.includes(product)) {
                        state.products.push(product)
                        console.log(product)
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
        serialize: (state) => JSON.stringify(state.state),
        deserialize: (state) => JSON.parse(state.state)

    }
))
export default useCart;