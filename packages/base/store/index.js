import { create } from 'zustand';

export const useStore = create((set) => ({
  presentationStep: 0,
  isCartVisible: false,
  toggleIsCartVisible: () => set((state) => ({ ...state, isCartVisible: !state.isCartVisible })),
  cart: [],
  setCart: (cart) => set(() => ({ cart })),

  cachedProducts: [],
  addToCachedProducts: (productId) =>
    set((state) => ({
      ...state,
      cachedProducts: [...state.cachedProducts, productId]
    }))
}));
