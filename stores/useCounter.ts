import create, { GetState, SetState } from 'zustand';
import { persist } from 'zustand/middleware';
import { CounterStore } from '../types/CounterStore';

const useCounter = create(
  persist<CounterStore>(
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
      
    }),
    {
      name: 'counter-cart-storage', // name of item in the storage (must be unique)
      getStorage: () => localStorage,
    },
  ),
);

export default useCounter;
