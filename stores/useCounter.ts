import { WritableDraft } from "immer/dist/internal";
import create, { GetState } from "zustand";
import { persist } from "zustand/middleware";

const useCounter = create((set: any, get: any) => ({
  counter: 1 as number,
  incrementCounter: (counter: number) =>
    set((state: any) => {
      const counter = state.counter;
      state.counter = counter >= 1 ? counter + 1 : counter + 0;
      console.log(counter)
    }),
    decrementCounter: (counter: number) =>
    set((state: any) => {
      const counter = state.counter;
      state.counter = counter > 1 ? counter - 1 : counter + 0;
      console.log(counter)
    }),
}));

export default useCounter;