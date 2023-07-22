import { create } from 'zustand';

export const useStore = create((set) => ({
  presentationStep: 7,
  cartVisibility: 'hidden', // Alternatives will be 'visible' or 'peeking'
  toggleCartVisibility: (visibility) => set((state) => ({ ...state, cartVisibility: visibility })),
  cart: [],
  setCart: (cart) => set(() => ({ cart })),

  cachedProducts: [],
  addToCachedProducts: (productId) =>
    set((state) => ({
      ...state,
      cachedProducts: [...state.cachedProducts, productId]
    }))
}));
