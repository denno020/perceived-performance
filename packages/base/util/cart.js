import { loadItem } from './products';
const cart = new Set();

export const addToCart = (productId) => {
  return new Promise((res) => {
    cart.add(productId);

    setTimeout(() => {
      res({ cart: Array.from(cart).map((productId) => loadItem(Number(productId))) });
    }, 1000);
  });
};

export const clearCart = () => {
  return new Promise((res) => {
    cart.clear();

    setTimeout(() => {
      res({ cart: Array.from(cart) });
    }, 1000);
  });
};
