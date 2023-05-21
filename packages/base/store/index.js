import { create } from "zustand";

export const useStore = create((set) => ({
  isCartVisible: false,
  toggleIsCartVisible: () =>
    set((state) => ({ ...state, isCartVisible: !state.isCartVisible })),
  cart: [],
  setCart: (cart) => set(() => ({ cart })),

  cachedProducts: [],
  addToCachedProducts: (productId) =>
    set((state) => ({
      ...state,
      cachedProducts: [...state.cachedProducts, productId],
    })),
}));
