import { GetState, State, StoreApi, StateCreator } from "zustand";

import { NamedSet } from "zustand/middleware";

import produce, { Draft } from "immer";

const immer =
  <
    T extends State,
    CustomSetState extends NamedSet<T>,
    CustomGetState extends GetState<T>,
    CustomStoreApi extends StoreApi<T>
  >(
    config: StateCreator<
      T,
      (
        partial: ((draft: Draft<T>) => void) | T,
        replace?: boolean,
        name?: string
      ) => void,
      CustomGetState,
      CustomStoreApi
    >
  ): StateCreator<T, CustomSetState, CustomGetState, CustomStoreApi> =>
  (set, get, api) =>
    config(
      (partial, replace, name) => {
        const nextState =
          typeof partial === "function"
            ? produce(partial as (state: Draft<T>) => T)
            : partial;

        return set(nextState, replace, name);
      },
      get,
      api
    );

export default immer;
