import { WritableDraft } from "immer/dist/internal";
import create, { GetState, SetState } from "zustand";
import { persist } from "zustand/middleware";

type CounterStore = {
  counter: { [x: string]: number };
  incrementCounter: (productId: number) => void;
  decrementCounter: (productId: number) => void;
};

const useCounter = create<CounterStore>(
  (set: SetState<CounterStore>, get: GetState<CounterStore>) => ({
    counter: {},
    incrementCounter: (productId: number) =>
      set((state) => {
        const { counter } = state;
        const amount = counter[productId] || 1;

        return {
          counter: {
            ...counter,
            [productId]: amount >= 1 ? amount + 1 : amount + 0,
          },
        };
      }),

    decrementCounter: (productId: number) =>
      set((state) => {
        const { counter } = state;
        const amount = counter[productId] || 1;

        return {
          counter: {
            ...counter,
            [productId]: amount > 1 ? amount - 1 : amount + 0,
          },
        };
      }),
  })
);

export default useCounter;