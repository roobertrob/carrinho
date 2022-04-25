export type CounterStore = {
  counter: { [x: string]: number };
  incrementCounter: (productId: number) => void;
  decrementCounter: (productId: number) => void;
};
