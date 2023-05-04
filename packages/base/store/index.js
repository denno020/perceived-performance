import { create } from 'zustand'

export const useStore = create((set) => ({
  cart: [],
  setCart: (cart) => set(state => ({ cart }))
}))