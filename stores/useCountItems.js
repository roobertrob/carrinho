import create from "zustand"
import { persist } from "zustand/middleware"

export const useCountItems = create(persist(
  (set, get) => ({
    countItems: 0,
    setCountItems: () => set({ countItems: get().countItems + 1 })
  }),
  {
    name: "cart-count", // name of item in the storage (must be unique)
    
  }
))
export default useCountItems;